import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={{ base: "column", lg: "row", xl: "row" }}
      minH="10vh"
      w={{ base: "100%", lg: "1280px", xl: "1280px" }}
      justify="space-around"
      align="center"
      position="static"
      bottom="0"
      px={4}
      mb={16}
    >
      <Text textStyle="h3" as="h3" fontSize={{}} color="neutral.100">
        Contate-nos: blogdosblogueiros@blogpost.blogpost
      </Text>
      <Flex
        as="nav"
        w={{ base: "100vw", lg: "450px", xl: "450px" }}
        direction="row"
        justify="space-around"
      >
        <Text as="h3" textStyle="h3" fontSize="x-large" justifyContent="end">
          BlogdosBlogueiros &copy;
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
