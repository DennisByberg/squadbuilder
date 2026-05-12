import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "SquadBuilder",
  description: "Create squads and plan lineups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} ${bebasNeue.variable} min-h-full flex flex-col`}>
        <Header />
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4">{children}</div>
      </body>
    </html>
  );
}
