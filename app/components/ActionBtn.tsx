import { Button } from "@chakra-ui/react";
import React from "react";

export default function ActionBtn({ msg, link }: { msg: string, link: string }) {
  return (
    <Button
      backgroundColor="#FF621A"
      color="white"
      _hover={{}}
      fontSize="small"
      borderRadius={5}
    >
      {msg}
    </Button>
  );
}
