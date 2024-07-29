"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ActionBtn from "../ActionBtn";
import LinkBtn from "../LinkBtn";
import SideDrawer from "./SideDrawer";

const links = [
  { msg: "HOME", link: "/#home" },
  { msg: "SERVICES", link: "/#services" },
  { msg: "PRICING", link: "/#pricing" },
  // { msg: "ABOUT US", link: "/aboutus" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <Box
      paddingX={{ base: "20px", lg: "60px" }}
      paddingY="15px"
      boxShadow="sm"
      zIndex={10}
      position="fixed"
      width="100%"
      backgroundColor="white"
    >
      <center>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1200px"
        >
          <Image src="/signature.png" alt="signature" width={40} />
          <Flex gap={6} display={{ base: "none", lg: "flex" }}>
            {links?.map((link, index) => (
              <Box onClick={() => setActiveLink(index)} key={link.msg}>
                <LinkBtn
                  msg={link.msg}
                  link={link.link}
                  isActive={index === activeLink}
                />
              </Box>
            ))}
          </Flex>
          <Box display={{ base: "none", lg: "block" }}>
            <ActionBtn msg="CONTACT NOW" link="/#contactus" />
          </Box>
          <SideDrawer links={links} />
        </Flex>
      </center>
    </Box>
  );
}
