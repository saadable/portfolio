module.exports = {
  siteUrl: "https://mrsaad.site",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "/_error",
    "/_not-found",
    "/sitemap.xml",
    "/robots.txt",
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    // additionalSitemaps can point to any external sitemap shards if needed
    additionalSitemaps: [
      // Example: "https://mrsaad.site/sitemap-0.xml"
    ],
  },
  // Optional transform to adjust priority/changefreq per path
  transform: async (config, path) => {
    return {
      loc: path === "/" ? config.siteUrl + "/" : `${config.siteUrl}${path}`,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
