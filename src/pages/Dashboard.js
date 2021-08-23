import { Accordion, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import UserCard from "../components/dashboard/UserCard";
import PostAccordion from "../components/post/PostAccordion";
import Main from "../layouts/Main";
import { posts } from "../lib/posts";
import { user } from "../lib/user";
/**
 **[X] Mostrar lista de post nos accordions
 **[X] Mostrar quantidade de posts
 **[] Mostrar quantidade de likes
 **[] Mostrar comentarios de cada post
 **[] Mostrar quantidade de comentarios
 **[X] Mostrar name, imagem
 */

const Dashboard = () => {
  return (
    <Main w={{ base: "100%", lg: "1280px", xl: "1280px" }}>
      <Text as="h1" textStyle="h1" textAlign="center" pb={16}>
        Dashboard
      </Text>
      <Flex
        justify="space-between"
        flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
        w={{ base: "80%", lg: "1280px", xl: "1280px" }}
      >
        <Box w="100%" padding="4px" mx="8">
          <Accordion allowMultiple border="2px" borderRadius="5px">
            {posts.map((post) => {
              return <PostAccordion post={post} />;
            })}
          </Accordion>
        </Box>
        <Box w="100%" padding="4px" mx="8">
          <UserCard user={user} />
        </Box>
      </Flex>
    </Main>
  );
};

export default Dashboard;
