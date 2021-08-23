import { Box, chakra, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import { FaHome } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Flex
      as="header"
      direction={{ base: "column", lg: "row", xl: "row" }}
      minH="10vh"
      w={{ base: "100%", lg: "1280px", xl: "1280px" }}
      justify="space-between"
      align="center"
      px={{ base: 12, lg: 0, xl: 0 }}
      mb={12}
      pt={2}
    >
      <Box>
        <Text
          bgGradient="linear(to-r, neutral.50, blue.50)"
          bgClip="text"
          fontSize="xxx-large"
          fontWeight="bold"
          fontFamily="JetBrains Mono, monospace"
        >
          Blog dos Blogueiros
        </Text>
      </Box>
      <Flex
        as="nav"
        w={{ base: "100vw", lg: "450px", xl: "450px" }}
        justify="space-between"
      >
        <IconButton
          icon={<HamburgerIcon />}
          display={{ lg: "none", md: "none", xl: "none" }}
          //onClick=
        >
          Oi
        </IconButton>
        <Button route="/" icon={<FaHome />}>
          Home
        </Button>
        <Button route="/dashboard" icon={<FaDigitalTachograph />}>
          DashBoard
        </Button>
        <Button route="/profile" icon={<FaUserCircle />}>
          Profile
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
