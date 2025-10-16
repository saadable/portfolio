import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import ScrollToTopButton from "@/Components/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/Components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mrsaad.site"),
  title: "Mr. Saad | Full Stack MERN Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "Full Stack MERN Developer with Next.js expertise. Building fast, secure, and responsive websites optimized for all devices.",
  keywords: [
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Saad Sajid", url: "https://mrsaad.site" }],
  creator: "Saad Sajid",
  publisher: "Saad Sajid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mrsaad.site",
  },
  openGraph: {
    title: "Mr. Saad Portfolio",
    description:
      "Full Stack MERN Developer with Next.js expertise. Delivering optimized, responsive websites for all devices.",
    url: "https://mrsaad.site",
    siteName: "Mr. Saad Portfolio",
    images: [
      {
        url: "https://saadahmeddev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mr. Saad Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Saad Portfolio",
    description:
      "Full Stack MERN Developer with Next.js expertise. Optimized, fast, and responsive websites.",
    images: ["https://saadahmeddev.vercel.app/og-image.png"],
    creator: "@saadsajid_",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body suppressHydrationWarning>
        <ScrollToTopButton/>
        <Navbar/>
        {children}
        <Footer/>
        <Script
          id="structured-data-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saad Sajid",
              url: "https://mrsaad.site",
              sameAs: [
                "https://github.com/saadable",
                "https://www.linkedin.com/in/saad-sajid-42b683232/",
                "https://twitter.com/saadsajid_",
              ],
              jobTitle: "Full Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Remote",
              },
              knowsAbout: [
                "MERN Stack",
                "Next.js",
                "React.js",
                "Node.js",
                "MongoDB",
                "Web Development",
              ],
            }),
          }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mrsaad.site/#organization",
                  "name": "Mr. Saad",
                  "url": "https://mrsaad.site",
                  "logo": "https://mrsaad.site/logo.png",
                  "sameAs": [
                    "https://github.com/saadable",
                    "https://www.linkedin.com/in/saad-sajid-42b683232/",
                    "https://twitter.com/saadsajid_"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mrsaad.site/#website",
                  "url": "https://mrsaad.site",
                  "name": "Mr. Saad Portfolio",
                  "publisher": { "@id": "https://mrsaad.site/#organization" }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
