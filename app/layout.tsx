import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Navbar } from "./navbar"; // Import the Navbar component from the navbar.tsx file
import { Footer } from "./footer"; // Import the Navbar component from the navbar.tsx file


const inter = Roboto({
  subsets: ["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "NovaCards.ai Blog",
  description: "Welcome to the home of the NovaCards.ai blog! Keep update to date with the latest news and updates from the NovaCards team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
