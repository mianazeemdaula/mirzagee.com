import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubikDisplay = Rubik({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const rubikBody = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
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
      className={`${rubikDisplay.variable} ${rubikBody.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
