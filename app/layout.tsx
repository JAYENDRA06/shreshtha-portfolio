import type { Metadata } from "next";
import { Varela_Round, Sono, Montserrat } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

const inter = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Shreshtha Awasthi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
