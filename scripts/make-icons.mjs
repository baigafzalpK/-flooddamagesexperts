#!/usr/bin/env node
/**
 * Build the favicon bundle from the ClearPath SVG mark.
 * Only fills what's missing — never overwrites owner-supplied files.
 * Usage: npm run icons
 */
import { existsSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
mkdirSync(pub, { recursive: true });

const svg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0f2b3d"/>
  <path d="M32 10 C 32 10, 20 26, 20 36 a12 12 0 0 0 24 0 C 44 26, 32 10, 32 10 Z" fill="#0a93b8"/>
  <path d="M14 50 C 26 54, 38 54, 50 46" stroke="#e05a1f" stroke-width="5" stroke-linecap="round" fill="none"/>
</svg>`;

async function png(name, size, { white = false } = {}) {
  const dest = join(pub, name);
  if (existsSync(dest)) {
    console.log(`skip ${name} (exists)`);
    return null;
  }
  let img = sharp(Buffer.from(svg(size))).resize(size, size);
  if (white) {
    img = sharp({
      create: { width: size, height: size, channels: 4, background: "#ffffff" },
    }).composite([{ input: await img.png().toBuffer(), blend: "over" }]);
  }
  await img.png().toFile(dest);
  console.log(`wrote ${name}`);
  return dest;
}

/** Minimal ICO container (PNG-compressed entries, Vista+ compatible). */
function buildIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO
  header.writeUInt16LE(pngBuffers.length, 4);
  const entries = [];
  let offset = 6 + 16 * pngBuffers.length;
  for (const buf of pngBuffers) {
    const e = Buffer.alloc(16);
    const img = { w: 32 }; // placeholder, replaced below
    entries.push({ e, buf, offset });
    offset += buf.length;
  }
  return { header, entries };
}

async function main() {
  const p16 = await png("favicon-16x16.png", 16);
  const p32 = await png("favicon-32x32.png", 32);
  await png("apple-touch-icon.png", 180, { white: true });
  await png("android-chrome-192x192.png", 192);
  await png("android-chrome-512x512.png", 512);

  // favicon.ico from 16/32/48 (PNG-compressed ICO)
  const icoDest = join(pub, "favicon.ico");
  if (!existsSync(icoDest)) {
    const sizes = [16, 32, 48];
    const bufs = [];
    for (const s of sizes) {
      bufs.push(await sharp(Buffer.from(svg(s))).resize(s, s).png().toBuffer());
    }
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(bufs.length, 4);
    const dirEntries = [];
    let offset = 6 + 16 * bufs.length;
    bufs.forEach((buf, i) => {
      const s = sizes[i];
      const e = Buffer.alloc(16);
      e.writeUInt8(s >= 256 ? 0 : s, 0);
      e.writeUInt8(s >= 256 ? 0 : s, 1);
      e.writeUInt8(0, 2); // palette
      e.writeUInt8(0, 3); // reserved
      e.writeUInt16LE(1, 4); // planes
      e.writeUInt16LE(32, 6); // bpp
      e.writeUInt32LE(buf.length, 8);
      e.writeUInt32LE(offset, 12);
      dirEntries.push(e);
      offset += buf.length;
    });
    writeFileSync(icoDest, Buffer.concat([header, ...dirEntries, ...bufs]));
    console.log("wrote favicon.ico");
  } else {
    console.log("skip favicon.ico (exists)");
  }

  const manifestDest = join(pub, "site.webmanifest");
  if (!existsSync(manifestDest)) {
    writeFileSync(
      manifestDest,
      JSON.stringify(
        {
          name: "ClearPath Biohazard",
          short_name: "ClearPath",
          icons: [
            { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
            { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
          ],
          theme_color: "#0b2a4a",
          background_color: "#faf8f4",
          display: "standalone",
        },
        null,
        2
      )
    );
    console.log("wrote site.webmanifest");
  } else {
    console.log("skip site.webmanifest (exists)");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
