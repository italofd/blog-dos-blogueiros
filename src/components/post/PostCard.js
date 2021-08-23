import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Post = ({ title, content, user }) => {
  return (
    <Flex
      as="article"
      minH="300px"
      direction="column"
      maxW={{ base: "80%", md: "100%", lg: "100%", xl: "100%" }}
      justify="space-between"
      p={8}
      my={8}
      border="2px solid"
      borderRadius="5px"
    >
      <Box as="header" pb={8}>
        <Text as="h1" textStyle="h1">
          {title}
        </Text>
      </Box>
      <Text fontSize="large">{content}</Text>
      <Flex as="footer" w="100%" justify="flex-end" pt={8}>
        <Text fontSize="medium">{user}</Text>
      </Flex>
    </Flex>
  );
};

export default Post;
