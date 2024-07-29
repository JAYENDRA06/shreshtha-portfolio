import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function ActionBtn({
  msg,
  link,
}: {
  msg: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <Button
        backgroundColor="#FF621A"
        color="white"
        colorScheme="orange"
        fontSize="small"
        borderRadius={5}
      >
        {msg}
      </Button>
    </Link>
  );
}
