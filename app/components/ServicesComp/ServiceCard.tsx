import { Flex, Card, CardBody, Heading, Image, Stack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

type Content = {
  src: string;
  heading: string;
  content: {
    title: string;
    text: string;
  }[];
};

export default function ServiceCard({ content }: { content: Content }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      textAlign="left"
      paddingX={8}
      paddingY={4}
      size="lg"
      gap={10}
      alignItems="center"
      transition="ease-in"
      _hover={{
        boxShadow: "md"
      }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={content.src}
        alt={content.heading}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{content.heading}</Heading>

          <UnorderedList gap={3} mt={5} py="2">
            {content.content.map((subContent) => (
              <ListItem key={subContent.title}>
                <Text as="span" fontWeight="semibold">{subContent.title && subContent.title + ": "}</Text>
                {subContent.text}
              </ListItem>
            ))}
          </UnorderedList>
        </CardBody>
      </Stack>
    </Card>
  );
}
