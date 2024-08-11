import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import WhatsappFloater from "./components/WhatsappFloater";

const inter = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Ed Pal",
  description: "Supporting you in your academic needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: "relative" }}>
        <ChakraProvider>
          <Navbar />
          {children}
          <WhatsappFloater />
        </ChakraProvider>
      </body>
    </html>
  );
}
