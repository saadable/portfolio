import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
