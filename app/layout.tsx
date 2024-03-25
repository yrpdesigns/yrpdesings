import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "YRP Designs",
  description: "Interior design company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={righteous.className}>
      <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <svg className="mr-2 h-8 w-8 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="text-xl font-semibold tracking-tight">YRP</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>{children}</body>
    </html>
  );
}
