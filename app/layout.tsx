"use client"; // Needs to be client to check the path

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isStudio && <Header />}
        {children}
        {!isStudio && <Footer />}
      </body>
    </html>
  );
}
