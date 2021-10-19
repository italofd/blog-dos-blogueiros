import { Flex} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main: React.FC = ({ children }) => {
  return (
    <Flex
      as="main"
      direction="column"
      minH="100vh"
      minW="100vw"
      bgGradient="linear(to-b, neutral.50, neutral.100)"
      align="center"
      w={{ base: "100%", lg: "1280px", xl: "1280px" }}
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
