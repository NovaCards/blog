import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaCards Blog",
  description: "Welcome to the NovaCards blog! Here you'll find several stories covering AI and various computing methods in the fields of medicine, medical education, and education broadly. Additionally, this is the home for all the latest news and updates about our products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
