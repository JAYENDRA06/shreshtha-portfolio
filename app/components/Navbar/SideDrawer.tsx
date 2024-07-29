import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";

export default function SideDrawer({
  links,
}: {
  links: { msg: string; link: string }[];
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Button variant="ghost" colorScheme="orange" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Stack gap={4}>
              {links.map((link) => (
                <Link key={link.msg} href={link.link} onClick={onClose}>
                  {link.msg}
                </Link>
              ))}
              <Link href="/#contactus" onClick={onClose}>
                <Button
                  backgroundColor="#FF621A"
                  color="white"
                  colorScheme="orange"
                  fontSize="small"
                  borderRadius={5}
                >
                  CONTACT US
                </Button>
              </Link>
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="center" bgColor="#EEEEEE">
            <Text color="gray">{"made with ❣️ by shreshtha"}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
