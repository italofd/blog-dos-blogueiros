import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer: React.FC = () => {
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
      /*borderTop="3px solid #EEA659"*/
      px={4}
      mt={12}
      mb={16}
    >
      <Box>
        <Text
          textStyle="h3"
          as="h3"
          pt={10}
          fontSize="x-large"
          align="center"
          pb={6}
        >
          Contate-nos:
        </Text>
        <Flex direction="row">
          <AiOutlineMail
            name="AiOutlineMail"
            size={30}
            color="blackAlpha.800"
          />

          <Text ml={2} fontSize="x-large" pb={4}>
            {" "}
            theboxcontent@gmail.com
          </Text>
        </Flex>
        <Flex direction="row">
          <AiOutlinePhone size={30} color="blackAlpha.800" />
          <Text ml={2} fontSize="x-large" pb={4}>
            {" "}
            (19)9389217
          </Text>
        </Flex>
        <Flex>
          <GoLocation size={30} color="blackAlpha.800" />
          <Text fontSize="x-large" pb={4}>
            Rua Matheus Garcia Robles, 1565
          </Text>
        </Flex>
      </Box>

      <Flex
        as="nav"
        w={{ base: "100vw", lg: "450px", xl: "450px" }}
        direction="row"
        justify="space-around"
      >
        <Box>
          <Heading
            as="h1"
            bgGradient="linear(to-r, green.700, green.900)"
            bgClip="text"
            fontSize="xx-large"
            fontWeight="bold"
            fontFamily="JetBrains Mono, monospace"
          >
            The<span style={{ color: "#E88821" }}>[</span>
            <span style={{ color: "#152328" }}>boxContent</span>
            <span style={{ color: "#E88821" }}>]</span>
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
