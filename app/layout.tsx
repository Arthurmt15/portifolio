import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthur — Engenharia de Software de Ponta a Ponta",
  description:
    "Desenvolvedor Full-Stack focado em arquitetura limpa, microsserviços, sistemas públicos e ecossistemas robustos em .NET e Laravel. Construindo soluções escaláveis e impactantes.",
  keywords: ["Arthur", "Full-Stack", ".NET", "Laravel", "Microsserviços", "Engenharia de Software"],
  authors: [{ name: "Arthur" }],
  openGraph: {
    title: "Arthur — Engenharia de Software de Ponta a Ponta",
    description: "Construindo Soluções Escaláveis e Impactantes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${space.variable} antialiased bg-[#09090b] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
