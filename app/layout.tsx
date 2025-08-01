import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "Plamena Petkova Portfolio",
  description: "Portfolio website with P.Petkova's projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula" className={inter.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
