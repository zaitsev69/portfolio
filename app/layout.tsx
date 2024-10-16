import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab, Archivo_Narrow } from 'next/font/google';
 
const roboto_slab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
 
export const archivo_narrow = Archivo_Narrow({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nathan Cadilhac Website",
  description: "Portfolio de Nathan Cadilhac développeur web situé à Lyon. On y retrouve ses projets, ses skills ainsi qu'une présentation de qui il est",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Appliquer la police Roboto globalement */}
      <body className={roboto_slab.className}>{children}</body>
    </html>
  );
}
