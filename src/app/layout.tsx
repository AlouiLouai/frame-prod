import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrameProd - Audio-Visual Excellence",
  description: "Showcase of FrameProd's audio-visual services and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white min-h-screen`}
      >
        <div className="bg-orange-500 text-black py-2 text-center">
          <p className="font-semibold">
            This site is still under improvement. We appreciate your patience!
          </p>
        </div>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
