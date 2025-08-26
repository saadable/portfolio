import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import ScrollToTopButton from "@/Components/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mr. Saad Portfolio",
  description: "Full Stack Mern Developer with Next js expertise. I Deliver a fully optimized website, responsive on all screen devices e.g mobile screen, laptop screen, tablets(tabs) screens and large screen devices. Don't hesitate to contact me to make a next step for your journey.",
  content: 'Full Stack Web Developer | MERN Stack Developer | Next js Developer',
  keywords: ['Reactjs', 'Nextjs', 'Redux', 'JavaScript', 'Tailwind CSS', 'Nodejs', 'Expressjs', 'MongoDB', 'Portfolio', 'Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
  authors: [{ name: 'Saad Sajid', url: 'https://mrsaad.site' }],
  creator: 'Saad Sajid',
  publisher: 'Saad Sajid',
  openGraph: {
    title: 'Mr. Saad Portfolio',
    description: 'Full Stack Mern Developer with Next js expertise. I Deliver a fully optimized website, responsive on all screen devices e.g mobile screen, laptop screen, tablets(tabs) screens and large screen devices. Don\'t hesitate to contact me to make a next step for your journey.',
    url: 'https://mrsaad.site',
    siteName: 'Mr. Saad Portfolio',
    images: [
      {
        url: 'https://saadahmeddev.vercel.app/og-image.png',
        width: 800,
        height: 600,
      },
    ],  
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr. Saad Portfolio',
    description: 'Full Stack Mern Developer with Next js expertise. I Deliver a fully optimized website, responsive on all screen devices e.g mobile screen, laptop screen, tablets(tabs) screens and large screen devices. Don\'t hesitate to contact me to make a next step for your journey.',
    images: ['https://saadahmeddev.vercel.app/og-image.png'],
    creator: '@saadsajid_',
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
      >
        <ScrollToTopButton/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
