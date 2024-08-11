import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";

const servicesContent = [
  {
    src: "1.svg",
    heading: "Thesis and Dissertation Support",
    content: [
      {
        title: "Thesis Writing Consultation",
        text: "Expert advice and support in structuring and refining your thesis",
      },
      {
        title: "Dissertation Proposal Guidance",
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
        text: "Professional statistical support to help interpret, analyse and present data accurately",
      },
      {
        title: "Systematic Literatre Reviews",
        text: "Comprehensive reviews that synthesize existing research in your field",
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
        text: "Help in identifying the most appropriate and high-impact journals for your publications",
      },
      {
        title: "Poster Creation",
        text: "Creation of high-quality, visually appealing posters for conference presentations",
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
        text: "Providing accurate and consistent referencing in the required citation style",
      },
    ],
  },
  {
    src: "5.svg",
    heading: "Customized Academic Services",
    content: [
      {
        title: "",
        text: "Tailored support to meet your unique academic needs like consultation call with the expert of your field",
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
