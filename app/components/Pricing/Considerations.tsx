import { Card, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const content = [
  {
    heading: "Complexity",
    content: "More complex or specialized services may require higher pricing.",
  },
  {
    heading: "Turnaround Time",
    content: "Faster delivery may justify higher charges.",
  },
  {
    heading: "Experience and Expertise",
    content:
      "Higher levels of expertise and experience can command premium prices.",
  },
  {
    heading: "Market Rates",
    content:
      "Research competitors' rates to ensure your pricing is competitive yet fair.",
  },
];

export default function Considerations() {
  return (
    <Card size="lg" textAlign="left" p={10}>
      <Heading fontSize="2xl" mb={4}>Considerations for pricing</Heading>
      <UnorderedList>
        {content.map((item) => (
          <ListItem key={item.heading}>
            <Text as="span" fontWeight="700" color="#FF621A">
              {item.heading}:{" "}
            </Text>
            {item.content}
          </ListItem>
        ))}
      </UnorderedList>
    </Card>
  );
}
