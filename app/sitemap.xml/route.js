import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://mrsaad.site"; // <-- update if needed
  const appDir = path.join(process.cwd(), "app");

  // collect routes by scanning app/ for page.(js|jsx|ts|tsx)
  const routes = new Set();

  function walk(dir, routeParts = []) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // skip API and special folders if present
        if (entry.name === "api" || entry.name === "sitemap.xml" || entry.name === "robots.txt") continue;
        // skip route group folders (starting with '(')
        if (entry.name.startsWith("(")) {
          walk(fullPath, routeParts);
        } else {
          walk(fullPath, [...routeParts, entry.name]);
        }
      } else if (entry.isFile()) {
        if (/^page\.(js|jsx|ts|tsx|mjs|cjs)$/.test(entry.name)) {
          // build url path using POSIX style
          const urlPath = routeParts.length === 0 ? "/" : `/${routeParts.join("/")}`;
          // skip dynamic segments like [id]
          if (urlPath.includes("[")) continue;
          routes.add(urlPath);
        }
      }
    }
  }

  walk(appDir);

  const urls = Array.from(routes).sort((a, b) => (a === "/" ? -1 : a.localeCompare(b)));

  const xmlParts = urls.map((u) => {
    return `
  <url>
    <loc>${baseUrl}${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlParts.join(
    "\n"
  )}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
