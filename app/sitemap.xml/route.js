import fs from "fs";
import path from "path";

export async function GET() {
  // Sitemap intentionally removed — return 410 Gone so clients and crawlers know it's permanently removed.
  return new Response("Sitemap has been permanently removed from this site.", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Instruct crawlers not to index this endpoint
      "X-Robots-Tag": "noindex, noarchive",
      // Disable caching to ensure clients see the permanent removal immediately
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Expires: "0",
    },
  });
}
