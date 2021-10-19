import { Box, Flex, IconButton, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { FaHome } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";
import NavBar from "./NavBar";
import { useDisclosure } from "@chakra-ui/hooks";
import PostForm from "./PostForm";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { FirebaseCtx } from "../contexts/FirebaseContext";

export interface span {
  span: any;
}

const Header: React.FC = () => {
  const { loginWithGoogle, loggedInUser, signOut } = useContext(AuthContext);

  const { auth } = useContext(FirebaseCtx);

  const history = useHistory();

  const [show, setShow] = useState<boolean>(false);

  const handleNavbar = () => setShow(!show);

  const { onOpen, isOpen, onClose } = useDisclosure();

  const handleSignOut = async () => {
    try {
      await signOut();
      return history.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Flex
      as="header"
      direction={{ base: "column", lg: "row", xl: "row" }}
      minH="10vh"
      w={{ base: "100%", lg: "1280px", xl: "1280" }}
      justify="space-around"
      align="center"
      px={{ base: 12, lg: 0, xl: 0 }}
      mb={10}
      pt={8}
      pb={6}
      borderBottom="3px solid #EEA659"
    >
      <Box>
        <Heading
          as="h1"
          bgGradient="linear(to-r, green.700, green.900)"
          bgClip="text"
          fontSize="50px"
          fontWeight="bold"
          fontFamily="Abel"
        >
          The
          <span
            style={{
              color: "#E88821",
            }}
          >
            [
          </span>
          <span
            style={{
              color: "#152328",

              fontFamily: "Abel",

              fontSize: "50px",
            }}
          >
            boxContent
          </span>
          <span
            style={{
              color: "#E88821",
            }}
          >
            ]
          </span>
        </Heading>
      </Box>
      <IconButton
        aria-label="hamburguer"
        display={{ base: "inline", md: "none", lg: "none", xl: "none" }}
        mb={4}
        onClick={handleNavbar}
        icon={<HamburgerIcon />}
      />
      <Flex
        as="nav"
        display={{ base: "none", md: "inherit", lg: "inherit", xl: "inherit" }}
        w={{ base: "100vw", lg: "450px", xl: "60%" }}
        justify="space-around"
      >
        <Button route="/" icon={<FaHome />}>
          Home
        </Button>

        {!loggedInUser ? (
          <>
            <Button route="/login"> LOGIN </Button>
            <Button route="/register"> REGISTER </Button>
          </>
        ) : (
          <>
            {" "}
            <Button icon={<FaDigitalTachograph />} route="/dashboard">
              DashBoard
            </Button>
            <Button icon={<FaUserCircle />} route="/profile">
              Profile
            </Button>
            <Button icon={<AddIcon />} onClick={onOpen}>
              NewPost
            </Button>
            <Button onClick={handleSignOut}> LogOut </Button>{" "}
          </>
        )}
      </Flex>
      {show ? <NavBar /> : ""}
      {isOpen && <PostForm isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
    </Flex>
  );
};

export default Header;
