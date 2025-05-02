import "./globals.css";

import type { Metadata } from "next";

import LayoutHeader from "./components/layout-header";

export const metadata: Metadata = {
  title: "Brisk Tab",
  description: "An alt blank page for your browser"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafa] text-gray-9">
        <LayoutHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
