import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const content = [
  {
    heading: "Expert Guidance",
    content: "Experienced professionals dedicated to helping you succeed.",
  },
  {
    heading: "Comprehensive Support",
    content:
      "From initial proposal to final publication, we support you every step of the way.",
  },
  {
    heading: "Quality and Reliability",
    content: "High-quality services you can rely on for academic success.",
  },
];

export default function WhyChoose() {
  return (
    <Flex direction="column" gap={5} id="services" pb={10}>
      <Heading fontSize="3xl" mt={10} mb={14} color="#FF621A">
        WHY CHOOSE THESE SERVICES
      </Heading>
      <Flex flexWrap="wrap" gap={10} justifyContent="center" alignItems="center">
        {content.map((item, index) => (
          <WhyChooseCard
            key={item.heading}
            heading={item.heading}
            content={item.content}
            index={index}
          />
        ))}
      </Flex>
    </Flex>
  );
}
