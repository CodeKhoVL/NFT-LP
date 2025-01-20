import type { Metadata } from "next";
import { Geist, Geist_Mono  } from "next/font/google";
import MPLUS1p from 'next/font/local'
import "./globals.css";
import Header from "@components/app.header";
import Footer from "@components/app.footer";
//import Headerdung from "@/components/app.header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const MPlus1 = MPLUS1p({
  src: [
    {
      path: './fonts/MPLUS1p-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-mplus',
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${geistSans.variable} ${geistMono.variable} ${MPlus1.variable} overflow-x-hidden bg-[#050C9C] font-medium antialiased`}>
      <Header />
       {children}
       <Footer />
      </body>
    </html>
  );
}
