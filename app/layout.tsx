// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <head>
        {/* Import direct des polices depuis Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400&family=Archivo+Narrow:wght@700&display=swap" />
      </head>
      <body className="font-roboto-slab">
        {children}
      </body>
    </html>
  );
}
