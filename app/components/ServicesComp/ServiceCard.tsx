import { Context } from "@/app/(context)/context";
import {
  Flex,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

type Content = {
  src: string;
  heading: string;
  content: {
    title: string;
    text: string;
  }[];
};

export default function ServiceCard({
  content,
  index,
}: {
  content: Content;
  index: number;
}) {
  const { setPricingState } = useContext(Context);
  const router = useRouter();

  return (
    <Card
      direction={{ base: "column", lg: "row" }}
      textAlign="left"
      paddingX={{ base: 5, lg: 8 }}
      paddingY={4}
      size="lg"
      gap={{ base: 2, lg: 10}}
      alignItems="center"
      transition="ease-in"
      _hover={{
        boxShadow: "md",
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

          <UnorderedList gap={3} mt={{ base: 4, lg: 5 }} py="2">
            {content.content.map((subContent) => (
              <ListItem key={subContent.title}>
                <Text as="span" fontWeight="semibold">
                  {subContent.title && subContent.title + ": "}
                </Text>
                {subContent.text}
              </ListItem>
            ))}
          </UnorderedList>

          <Button
            onClick={() => { setPricingState(index); router.push("/#pricing") }}
            rounded="full"
            fontSize="sm"
            mt={2}
            color="white"
            bgColor="#FF621A"
            colorScheme="orange"
            fontWeight="normal"
            w={{ base: "100%", lg: "inherit" }}
          >
            see pricing
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
}
