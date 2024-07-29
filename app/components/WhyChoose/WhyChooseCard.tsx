import { Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function WhyChooseCard({
  heading,
  content,
  index,
}: {
  heading: string;
  content: string;
  index: number;
}) {
  return (
    <Card size="lg" p={6} maxW={{ base: "auto", lg: "300px" }}>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        minH={{ base: "auto", lg: "350px" }}
      >
        <Text fontWeight={600} color="#FF621A" fontSize="xl">
          {heading}
        </Text>
        <Image src={`/why${index + 1}.svg`} alt={heading} width={40}></Image>
        <Text>{content}</Text>
      </Flex>
    </Card>
  );
}
