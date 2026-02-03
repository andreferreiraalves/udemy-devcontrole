import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Dev Controle - Sistema de gerênciamento",
  description: "Sistema de gerênciamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
