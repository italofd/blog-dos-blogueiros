import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FirebaseCtx } from "../../contexts/FirebaseContext";
import { UserContext } from "../../contexts/UserContext";
import PostCard from "./PostCard";
/**
 ** [x]Mostrar lista de posts
 **
 */
const Postlist: React.FC = ({ ...props }) => {
  const { state, actions } = useContext(UserContext);
  const [posts, setPosts] = useState<any[]>([]);
  const { db } = useContext(FirebaseCtx);

  const getPosts = async () => {
    try {
      const res = await db.collection("posts").get();
      const posts = await res.docs.map((doc) => {
        const data = doc.data();
        console.log("data", data);
        return data;
      });
      setPosts(posts);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Flex
      as="section"
      w={{ base: "100%", lg: "1280px", xl: "1280px" }}
      justify="center"
      direction="column"
      align="center"
      color="green.900"
    >
      {posts.map((post) => {
        console.log("post", post.uid);
        return <PostCard key={post.id} post={post} {...post} />;
      })}
    </Flex>
  );
};

export default Postlist;
