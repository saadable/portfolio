import { buildMetadata } from "@/lib/seo";

// ...existing code or imports...

// Example: simple data lookup — replace with real fetch (DB, CMS or API)
const sampleData = {
  "portfolio-site": {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js and Tailwind.",
    keywords: ["portfolio", "nextjs", "tailwind"],
    image: "/projects/portfolio-site/og.png",
  },
  "ecommerce-app": {
    title: "E-commerce App",
    description: "Full-stack MERN e-commerce application with Stripe payments.",
    keywords: ["ecommerce", "mern", "stripe"],
    image: "/projects/ecommerce-app/og.png",
  },
};

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const data = sampleData[slug] ?? {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    description: "Project details and case study.",
    keywords: [],
    image: "/og-image.png",
  };

  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/projects/${slug}`,
    keywords: data.keywords,
    image: data.image,
  });
}

export default function ProjectPage({ params }) {
  const slug = params.slug;
  const data = sampleData[slug];

  return (
    <main>
      <h1>{data ? data.title : slug}</h1>
      <p>{data ? data.description : "Project details coming soon."}</p>
      {/* replace with real project content */}
    </main>
  );
}
