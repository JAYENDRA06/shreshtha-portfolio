"use client";
import { Image, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function WhatsappFloater() {
  const sizeAnimation = keyframes`
  0% { width: 40px; height: 40px; }
  50% { width: 50px; height: 50px; }
  100% { width: 40px; height: 40px; }
`;
  return (
    <Link
      href="https://wa.me/918115524390?text=Hi%20I'm%20interested%20in%20working%20with%20you"
      target="_blank"
    >
      <Image
        height="40px"
        width="40px"
        zIndex={100}
        position="fixed"
        left={{ base: "85vw", lg: "93vw" }}
        bottom="5vh"
        alt="whatsapp icon"
        src="/WA.svg"
        animation={`${sizeAnimation} 2s ease-in-out infinite`}
      />
    </Link>
  );
}
