import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

type RootLayoutProps = {
  readonly children: React.ReactNode;
};
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <div className="relative w-full flex justify-center items-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
