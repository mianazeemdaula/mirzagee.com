import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Nunito_Sans, Amiri } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400"],
  style: ["italic"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirza Gee Manpower Services | Overseas Employment Promoters",
  description: "Licensed overseas employment promoters based in Lahore, Pakistan (Licence No. MPD/2671/Lhr). Your success is our mission. Providing premium recruitment and visa services.",
  keywords: "Mirza Gee, Manpower Services, Lahore, Pakistan, Overseas Employment, Promoter, Recruitment, Visa Processing, Dataflow, Licence Exam, Bureau of Emigration",
  authors: [{ name: "Mirza Gee Manpower Services" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${nunitoSans.variable} ${amiri.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

