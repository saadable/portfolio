export function buildMetadata({ title, description, path = "/", keywords = [], image = "/og-image.png" }) {
  const siteUrl = "https://mrsaad.site";
  const fullTitle = title ? `${title} | Mr. Saad` : "Mr. Saad | Full Stack MERN Developer";
  const canonical = siteUrl + (path === "/" ? "/" : path);

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...(keywords || []), "Mr Saad", "mrsaad", "mistersaad", "MERN Developer", "Next.js Developer", "Full Stack Developer", "Web Developer", "Portfolio", "Web Development Tools", "Website Developer", "JavaScript", "React", "Node.js", "MongoDB", "Responsive Design", "Modern Web Technologies"])),
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "Mr. Saad Portfolio",
      images: [{ url: siteUrl + image, alt: fullTitle, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteUrl + image],
      creator: "@saadsajid_",
    },
  };
}
