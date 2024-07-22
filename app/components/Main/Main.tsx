import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ActionBtn from "../ActionBtn";

export default function Main() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={6}
      alignItems="center"
      height="80vh"
      mt="9vh"
      id="home"
    >
      <GridItem textAlign="left">
        <Heading fontSize={50}>Your Partner in Academic Success</Heading>
        <Text my={10} lineHeight={1.7}>
          {`Hi there! my name is Shreshtha Awasthi, I'm here to support you through your academic journey.
            Whether you're a graduate, postgraduate, or PhD student, I offer a
            range of services to help you succeed at every stage of your research
            and writing process. Let's achieve your academic goals together
            with confidence and excellence.`}
        </Text>
        <ActionBtn msg="LET'S START" link="" />
      </GridItem>
      <GridItem>
        <Image
          src="main_svg.svg"
          height={500}
          width={500}
          alt="image of students"
        />
      </GridItem>
    </Grid>
  );
}
