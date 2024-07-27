import { Card, CardBody, CardFooter, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function TestimonialsCard({
    name,
    content,
}: {
    name: string;
    content: string;
}) {
    return (
        <Card margin={5} width="400px" position="relative">
            <Flex
                as="span"
                fontSize="3xl"
                position="absolute"
                right={-2}
                bottom={-2}
                bgColor="white"
                rounded="full"
                boxShadow="md"
                justifyContent="center"
                alignItems="center"
                height="50px"
                width="50px"
                color="#FF621A"
                border="1px"
            >
                <Text as="span" fontSize="lg" fontWeight={700} marginRight={0.5}>5</Text>
                <BsStarFill size={20} />
            </Flex>
            <CardBody>
                <Text textAlign="left">{content}</Text>
            </CardBody>
            <CardFooter fontWeight={700}>
                <Text color="#FF621A">{name}</Text>
            </CardFooter>
        </Card>
    );
}
