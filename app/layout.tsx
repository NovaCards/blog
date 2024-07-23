import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "./navbar"; // Import the Navbar component from the navbar.tsx file
import { Footer } from "./footer"; // Import the Navbar component from the navbar.tsx file

export const metadata: Metadata = {
  title: "NovaCards: Blog",
  description: "The NovaCards.ai blog contains all the latest news and updates from the NovaCards team on AI, medical education, and our tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
