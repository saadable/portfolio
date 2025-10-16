export function GET() {
  const sitemapUrl = "https://mrsaad.site/sitemap.xml"; // update if needed
  const txt = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain" },
  });
}
