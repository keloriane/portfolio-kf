import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./../assets/fonts/Satoshi-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Satoshi-Medium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Satoshi-Regular.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../assets/fonts/Satoshi-Light.woff",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Kevin Flabat",
  description: "Portfolio of Kevin Flabat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
