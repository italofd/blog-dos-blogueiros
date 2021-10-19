import React from "react";
import { Flex } from "@chakra-ui/react";
import { FaDigitalTachograph, FaHome, FaUserCircle } from "react-icons/fa";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      display={{ base: "inherit", md: "none", lg: "none", xl: "none" }}
      w={{ base: "100vw", lg: "450px", xl: "450px" }}
      justify="space-between"
      direction="column"
      align="center"
    >
      <Button route="/" icon={<FaHome />} minW="80%" mb={4}>
        Home
      </Button>
      <Button
        route="/dashboard"
        icon={<FaDigitalTachograph />}
        minW="80%"
        mb={4}
      >
        DashBoard
      </Button>
      <Button route="/profile" icon={<FaUserCircle />} minW="80%" mb={4}>
        Profile
      </Button>
    </Flex>
  );
};
export default Navbar;
