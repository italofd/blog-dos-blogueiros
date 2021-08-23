import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = ({ children }) => {
  return (
    <Flex
      as="main"
      direction="column"
      minH="100vh"
      minW="100vw"
      bgGradient="linear(to-b, #190D31, #070D36, #290D30)"
      align="center"
    >
      <Header />
      <Flex as="section" direction="column" minH="70vh">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Main;
