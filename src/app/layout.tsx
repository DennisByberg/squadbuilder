import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={cn("dark h-full antialiased", geist.variable)}>
      <body className={cn(bebasNeue.variable, "font-sans min-h-full flex flex-col")}>
        {/* Header */}
        <Header />
        {/* Page content */}
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4">{children}</main>
      </body>
    </html>
  );
}
