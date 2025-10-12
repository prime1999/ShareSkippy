import type { Metadata } from "next";
import { Kanit, Roboto, Inter, Signika } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const signika = Signika({
  variable: "--font-signika",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShareSkippy",
  description: "Share your files with ease using ShareSkippy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${inter.variable} ${roboto.variable} ${signika.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
