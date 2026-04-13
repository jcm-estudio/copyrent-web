import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CopyRent | Aulas híbridas interactivas y soluciones en sistemas de impresión",
  description:
    "Proyectores interactivos, fotocopiadoras multifuncionales y soluciones integrales para empresas e instituciones educativas. 30 años liderando la innovación.",
  keywords: [
    "CopyRent",
    "aulas híbridas",
    "proyectores",
    "fotocopiadoras",
    "alquiler",
    "epson",
    "sistemas de impresión",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}