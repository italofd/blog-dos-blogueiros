import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdMessage } from "react-icons/md";

const UserCard = ({ user }) => {
  return (
    <Flex
      padding="8"
      direction={{ base: "column", md: "column", lg: "row" }}
      align="center"
      border="2px"
      borderRadius="5px"
    >
      <Box padding={4} w="100%" align="center">
        <Image src={user.image} borderRadius="full" boxSize="165px" mb="8" />
        <Text as="h2" textStyle="h2" fontSize="24">
          {user.name}
        </Text>
      </Box>
      <Box padding={4} w="100%">
        <Text as="h2" textStyle="h2" fontSize="24">
          <Icon as={MdMessage} /> Quantidade de posts: {user.userposts.length}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserCard;
