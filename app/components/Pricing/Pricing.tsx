import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import PricingCard from "./PricingCard";
import { Context } from "@/app/(context)/context";
import Considerations from "./Considerations";

const pricingContent = [
  {
    name: "Thesis and Dissertation Support",
    services: [
      {
        name: "Master's Thesis",
        cost: "₹0.70 per word",
      },
      {
        name: "PhD Thesis",
        cost: "₹1.00 per word",
      },
      {
        name: "Dissertation Proposal",
        cost: "₹10,000 - ₹25,000",
      },
    ],
  },
  {
    name: "Research and Analysis",
    services: [
      {
        name: "Simple Statistical Analysis",
        cost: "₹5,000 - ₹10,000",
      },
      {
        name: "Advanced Statistical Analysis",
        cost: "₹10,000 - ₹20,000",
      },
      {
        name: "Systematic Literature Reviews",
        cost: "₹20,000 - ₹50,000",
      },
      {
        name: "Meta-Analysis",
        cost: "₹30,000 - ₹70,000",
      },
    ],
  },
  {
    name: "Publication and Presentation",
    services: [
      {
        name: "Journal Selection",
        cost: "₹1000 for a list of 5",
      },
      {
        name: "Poster Creation",
        cost: "₹5,000 - ₹10,000 per poster",
      },
    ],
  },
  {
    name: "Quality Assurance",
    services: [
      {
        name: "Plagiarism Check",
        cost: "₹600- ₹1000",
      },
      {
        name: "Grammar Check",
        cost: "₹500 - ₹1,000",
      },
      {
        name: "Referencing",
        cost: "₹1,000 - ₹3,000",
      },
    ],
  },
  {
    name: "Customized Academic Services",
    services: [
      {
        name: "Tailored Support (addon research support)",
        cost: "₹500 - ₹1,000 per hour",
      },
      {
        name: "Consultation call with the expert of your field",
        cost: "₹100 - ₹500 per hour",
      },
    ],
  },
];

export default function Pricing() {
  const { pricingState, setPricingState } = useContext(Context);

  return (
    <Flex direction="column" gap={5} id="pricing" pb={10}>
      <Heading fontSize="3xl" mt={10} mb={14} color="#FF621A">
        PRICING FOR SERVICES
      </Heading>
      <Tabs variant="soft-rounded" index={pricingState}>
        <TabList flexWrap="wrap" justifyContent="center">
          {pricingContent.map((pricing, index) => (
            <Tab
              key={pricing.name}
              _selected={{ color: "white", bg: "#FF621A" }}
              _hover={{ color: "#111111", bg: "#fdcbb3" }}
              m={2}
              onClick={() => setPricingState(index)}
            >
              {pricing.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels my={12}>
          {pricingContent.map((pricing, index) => (
            <TabPanel key={pricing.name + index} p={0}>
              <Flex
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={{ base: 3, lg: 10 }}
              >
                {pricing.services.map((service) => (
                  <PricingCard
                    key={service.name}
                    name={service.name}
                    cost={service.cost}
                  />
                ))}
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Considerations />
    </Flex>
  );
}
