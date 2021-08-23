import { Flex } from "@chakra-ui/react";
import React from "react";
import { posts } from "../../lib/posts";
import PostCard from "./PostCard";
/**
 ** [x]Mostrar lista de posts
 **
 */
const Postlist = () => {
  return (
    <Flex
      as="section"
      w={{ base: "100%", lg: "1280px", xl: "1280px" }}
      justify="center"
      direction="column"
      align="center"
    >
      {posts.map((post) => {
        return (
          <PostCard
            title={post.title}
            content={post.content}
            user={post.user}
          />
        );
      })}
    </Flex>
  );
};

export default Postlist;
