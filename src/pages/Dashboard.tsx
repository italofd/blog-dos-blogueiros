import { Accordion, Box, Flex, Text, Spinner } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import UserCard from "../components/dashboard/UserCard";
import PostAccordion from "../components/post/PostAccordion";
import Main from "../layouts/Main";
import { UserContext } from "../contexts/UserContext";
import { FirebaseCtx } from "../contexts/FirebaseContext";

/**
 **[X] Mostrar lista de post nos accordions
 **[X] Mostrar quantidade de posts
 **[X] Mostrar name, imagem
 **[X] Mostrar quantidade de likes
 **[] Mostrar comentarios de cada post
 **[] Mostrar quantidade de comentarios
 */

const Dashboard: React.FC = () => {
  const userCtx = useContext(UserContext);
  const { state, actions } = useContext(UserContext);
  const { db } = useContext(FirebaseCtx);
  const [userPosts, setUserPosts] = useState<any[]>([]);

  console.log("DashbordUser", state.userId);

  const getUserPosts = async () => {
    const foo = await db
      .collection("posts")
      .where("userId", "==", state.userId)
      .get();
    const posts = foo.docs.map((doc) => {
      const data = doc.data();
      console.log("UserPosts", data);
      return data;
    });
    setUserPosts(posts);
  };
  useEffect(() => {
    if (state.userId && state.userId !== undefined) getUserPosts();
  }, []);

  return (
    <Main>
      <Text as="h1" textStyle="h1" textAlign="center" pb={16}>
        Dashboard
      </Text>
      {state.user ? (
        <Flex
          justify="space-between"
          flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
          w={{ base: "80%", lg: "1280px", xl: "1280px" }}
        >
          <Box w="100%" padding="4px" mx="8">
            <Accordion allowMultiple border="2px" borderRadius="5px">
              {userPosts.map((post) => {
                return <PostAccordion key={post.title} post={post} />;
              })}
            </Accordion>
          </Box>
          <Box w="100%" padding="4px" mx="8" mb="18px">
            {userCtx.state.user === null ? (
              ""
            ) : (
              <UserCard user={userCtx.state.user} />
            )}
          </Box>
        </Flex>
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      )}
    </Main>
  );
};

export default Dashboard;
