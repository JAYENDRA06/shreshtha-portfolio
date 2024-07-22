import { Box } from "@chakra-ui/react";
import React from "react";

export default function OuterWrapper({
  children,
  bg,
}: Readonly<{
  children: React.ReactNode;
  bg: boolean;
}>) {
  return (
    <Box
      paddingX="60px"
      paddingY="15px"
      backgroundColor={bg ? "#FEF9EC" : "white"}
    >
      <Box maxWidth="1200px">{children}</Box>
    </Box>
  );
}
