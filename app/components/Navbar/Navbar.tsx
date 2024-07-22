"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ActionBtn from "../ActionBtn";
import LinkBtn from "../LinkBtn";

const links = [
  { msg: "HOME", link: "#home" },
  { msg: "SERVICES", link: "#services" },
  { msg: "PORTFOLIO", link: "#portfolio" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <Box
      paddingX="60px"
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
          <p>SA</p>
          <Flex gap={6}>
            {links?.map((link, index) => (
              <LinkBtn
                msg={link.msg}
                link={link.link}
                key={link.msg}
                index={index}
                isActive={index === activeLink}
                setActiveLink={setActiveLink}
              />
            ))}
          </Flex>
          <ActionBtn msg="CONTACT NOW" link="" />
        </Flex>
      </center>
    </Box>
  );
}
