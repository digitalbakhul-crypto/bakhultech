import type { Metadata } from "next";
import { Inter, Epilogue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bakhul Tech",
    template: "%s | Bakhul Tech",
  },
  description: "IT Solution & Technology",
  keywords: ["IT", "Technology", "Solutions", "Software"],
  authors: [{ name: "Bakhul Tech", url: "https://bakhultech.com" }],
  icons: {
    icon: "/favicon.png",
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
      className={`${inter.variable} ${epilogue.variable} ${poppins.variable}`}
    >
      <body suppressHydrationWarning={true} className="antialiased max-w-[1920px] mx-auto font-primary text-white bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
