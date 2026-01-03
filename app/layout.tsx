import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/shared/theme-provider";
import { Geist, Geist_Mono, Bebas_Neue, Inter, Gasoek_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-bebas-neue",
});

const gasoekOne = Gasoek_One({
  weight: ["400"],
  variable: "--font-gasoek-one",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Patrick Meredor",
  description: "Portfolio of Patrick Meredor",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${inter.variable} ${gasoekOne.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
