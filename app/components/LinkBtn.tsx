import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function LinkBtn({
  msg,
  link,
  isActive,
}: {
  msg: string;
  link: string;
  isActive?: boolean;
}) {
  return (
    <Link href={link}>
      <Text fontWeight="600" _hover={{ textDecoration: "underline" }} color={isActive ? "#FF621A" : "black"}>{msg}</Text>
    </Link>
  );
}
