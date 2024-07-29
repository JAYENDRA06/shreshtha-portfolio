import { Card, Text } from "@chakra-ui/react";
import React from "react";

export default function PricingCard({
  name,
  cost,
}: {
  name: string;
  cost: string;
}) {
  return (
    <Card
      size="lg"
      p={5}
      minWidth={{ base: "100%", lg: "400px"}}
      _hover={{ border: "1px", borderColor: "#FF621A" }}
    >
      <Text fontWeight={600}>{name}</Text>
      <Text mt={6} fontSize="2xl" fontWeight={700} color="#FF621A">
        {cost}
      </Text>
    </Card>
  );
}
