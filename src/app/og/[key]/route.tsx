import { ImageResponse } from "next/og";
import { ogCardFor, allOgKeys } from "@/lib/og";

export const dynamicParams = false;

export function generateStaticParams() {
  return allOgKeys().map((key) => ({ key }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  const card = ogCardFor(key);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0e4f4a",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#e4572e",
            fontFamily: "sans-serif",
          }}
        >
          {card.eyebrow}
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginTop: "24px",
            maxWidth: "900px",
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.75)",
            marginTop: "24px",
            fontFamily: "sans-serif",
          }}
        >
          {card.area}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "24px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "sans-serif",
          }}
        >
          bayoudry.com
        </div>
        {/* brush-stroke accent */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "120px",
            height: "630px",
            background: "#e4572e",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
