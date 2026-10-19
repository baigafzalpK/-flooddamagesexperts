import type { MetadataRoute } from "next";

/**
 * Production: allow everything except API, thank-you and tracking params.
 * Non-production: disallow everything.
 */
export default function robots(): MetadataRoute.Robots {
  const disallowParams = [
    "utm_*",
    "gclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "kw",
    "ref",
  ];
  if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/thank-you/", ...disallowParams.map((p) => `/*?*${p}*`)],
        },
      ],
      sitemap: "https://flooddamagesexperts.com/sitemap.xml",
    };
  }
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
