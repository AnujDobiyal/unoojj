import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import ScrollRestoration from "@/components/ScrollRestoration";
import { Inter, Poppins } from "next/font/google";
import Contact from "@/components/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj Dobiyal",
  description: "Developed a responsive personal portfolio website to showcase projects, technical skills, and achievements. Implemented a modern UI with optimized performance, mobile responsiveness, and intuitive navigation.",
  icons: {
    icon: [
      {
        url: "/mob.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        {/* <ScrollRestoration /> */}

        <Container>
          <Navbar />
          {children}
          <Contact />
        </Container>
      </body>
    </html>
  );
}
