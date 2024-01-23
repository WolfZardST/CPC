import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./Sidebar/sidebar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CPC",
  description: "CPC llego a Espol!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar/>
        <main className="ml-64 bg-slate-200 h-screen overflow-y-auto p-6 border-l-2">
          {children}
        </main>
      </body>
    </html>
  );
}
