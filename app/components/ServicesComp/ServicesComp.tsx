import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";

const servicesContent = [
  {
    src: "1.svg",
    heading: "Thesis and Dissertation Support",
    content: [
      {
        title: "Thesis Writing",
        text: "Expert guidance and support in crafting a well-structured and impactful thesis",
      },
      {
        title: "Dissertation Proposal",
        text: "Assistance in developing a compelling and robust dissertation proposal",
      },
    ],
  },
  {
    src: "2.svg",
    heading: "Research and Analysis",
    content: [
      {
        title: "Statistical Analysis",
        text: "Professional statistical support to help interpret and present data accurately",
      },
      {
        title: "Systematic Literatre Reviews",
        text: "Comprehensive reviews that synthesize existing research in the field",
      },
      {
        title: "Meta-Analysis",
        text: "In-depth analysis combining data from multiple studies to provide robust conclusions",
      },
    ],
  },
  {
    src: "3.svg",
    heading: "Publication and Presentation",
    content: [
      {
        title: "Journal Selection",
        text: "Assistance in finding the most appropriate and high-impact journals for publications",
      },
      {
        title: "Poster Creation",
        text: "High-quality, visually appealing posters for conference presentations",
      },
    ],
  },
  {
    src: "4.svg",
    heading: "Quality Assurance",
    content: [
      {
        title: "Plagiarism Check",
        text: "Ensure the originality of your work with thorough plagiarism checks",
      },
      {
        title: "Grammar Check",
        text: "Enhance the clarity and correctness of writing with expert grammar reviews",
      },
      {
        title: "Referencing",
        text: "Accurate and consistent referencing in the required citation style",
      },
    ],
  },
  {
    src: "5.svg",
    heading: "Customized Academic Services",
    content: [
      {
        title: "",
        text: "Tailored support to meet unique academic needs and research requirements",
      },
    ],
  },
];

export default function ServicesComp() {
  return (
    <Flex direction="column" gap={5} id="services" pb={10}>
      <Heading fontSize="3xl" mt={10} mb={14} color="#FF621A">
        SERVICES OFFERED
      </Heading>
      {servicesContent.map((content, index) => (
        <ServiceCard content={content} key={content.heading} index={index} />
      ))}
    </Flex>
  );
}
