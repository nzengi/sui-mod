import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashGrotesk = localFont({
  src: "../../public/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
  display: "swap",
  weight: "200 700",
});

export const metadata: Metadata = {
  title: "Sui ObjectID Monitor",
  description:
    "Real-time monitoring of Sui blockchain Object IDs with auto-discovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashGrotesk.variable} font-clash`}>{children}</body>
    </html>
  );
}
