import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Main from "../layouts/Main";
import { user } from "../lib/user";
/**
 **[] Mostrar imagem grande do usuario
 **[] Mostrar todas as informações do usuario
 **[]
 */

const Profile = () => {
  return (
    <Main>
      <Text as="h1" textStyle="h1" textAlign="center" pb={16}>
        Profile
      </Text>
      <Flex w="100%" px={16}>
        <Box paddingX={8}>
          <Image
            src={user && user.image}
            boxSize="400"
            borderRadius="5px"
            minW="400px"
          />
        </Box>
        <Box padding={10} border="2px" w="100%" borderRadius="5px">
          <Text pb={6} fontSize="xl">
            Nome: {user.name}
          </Text>
          <Text pb={6} fontSize="xl">
            Usuario: {user.username}
          </Text>
          <Text pb={6} fontSize="xl">
            Email: {user.email}
          </Text>
          <Text pb={2} fontSize="xl">
            Pais: {user.address.country}
          </Text>
          <Text pb={6} fontSize="xl">
            {user.address.city}, {user.address.state}
          </Text>
        </Box>
      </Flex>
    </Main>
  );
};

export default Profile;
