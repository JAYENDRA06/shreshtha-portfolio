import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import TestimonialsCard from './TestimonialsCard';
import Marquee from 'react-fast-marquee';

const content: { name: string, content: string }[] = [
    {
        name: "Huda Khan",
        content: "It was really a relief when I found out that Shreshtha is a practising statistician. She made the whole process so easy for me. All the data and its efficacy were well maintained even when all the onus was on you. You made my master's thesis a success and I will be grateful to you forever."
    },
    {
        name: "Anjali Saraswat",
        content: "I thank Shreshtha so much for helping me with my customized needs for my thesis. She helped me with the nitty-gritty of thesis writing, references, and statistical analysis, which made my PhD journey easy. I liked her work so much that I recommended her to all my friends."
    },
    {
        name: "Utkarsh Singh",
        content: "Shreshtha and her team helped me with my psychology dissertation at every step. From statistical analysis to grammar and plagiarism checks, it helped me calm down my anxiety regarding the submission as I knew these guys were always there to help me."
    },
    {
        name: "Archana Singh",
        content: "I took the services of statistical analysis from Shreshtha and she did everything very timely with a reasonable estimate. I highly recommend her."
    },
];

export default function Testimonials() {
    return (
        <Flex direction="column" gap={5} pb={10}>
            <Heading fontSize="3xl" mt={10} mb={14} color="#FF621A">TESTIMONIALS</Heading>
            <Marquee pauseOnHover>
                {content.map((content) => (
                    <TestimonialsCard name={content.name} content={content.content} key={content.content} />
                ))}
            </Marquee>
        </Flex>
    )
}
