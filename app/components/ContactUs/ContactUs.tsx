"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";

export default function ContactUs() {
  const toast = useToast();

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Field is required";
    } else if (value.length <= 2) {
      error = "Please enter valid inputs";
    }
    return error;
  }

  function validatePhno(value: number) {
    let error;
    if (value && (value <= 1000000000 || value <= 9999999999)) {
      error = "Please enter valid phone number";
    }
    return error;
  }

  return (
    <Box gap={5} id="contactus" pb={10} maxW="800px">
      <Heading fontSize="3xl" mt={10} mb={14} color="#FF621A">
        CONTACT US
      </Heading>
      <Formik
        initialValues={{ name: "", email: "", message: "", phno: "" }}
        onSubmit={async (values, actions) => {
          const payload = {
            name: values.name,
            email: values.email,
            message:
              "Phone number: " +
              values.phno +
              "\n" +
              "Message: " +
              values.message,
          };
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          if (response.status === 200) {
            toast({
              title: "Email sent!",
              description: "We'll get back to you soon",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Error!",
              description: "Something went wrong, please try again",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <Flex direction="column" gap={4}>
              <Field name="name" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    isRequired
                  >
                    <FormLabel>First name</FormLabel>
                    <Input {...field} placeholder="name" type="text" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    isRequired
                  >
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="email" type="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phno" validate={validatePhno}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.phno && form.touched.phno}
                  >
                    <FormLabel>Phone number</FormLabel>
                    <Input {...field} placeholder="0000000000" type="number" />
                    <FormErrorMessage>{form.errors.phno}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message" validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.message && form.touched.message}
                    isRequired
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea {...field} placeholder="ask us anything" />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Button
              mt={6}
              colorScheme="orange"
              isLoading={props.isSubmitting}
              type="submit"
              bgColor="#FF621A"
              w={{ base: "full", lg: "auto" }}
            >
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
