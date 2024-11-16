import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DKuarentando"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-red-950 via-30% via-emerald-900 to-red-400 text-white`}
      >
        <div className="flex flex-col min-h-screen p-8 pb-20 gap-5 sm:p-10 font-[family-name:var(--font-geist-sans)]">
          <Suspense>
            {children}
          </Suspense>
        </div>
      </body>
    </html>
  );
}
