import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FirebaseCtx } from "../../contexts/FirebaseContext";
import { UserContext } from "../../contexts/UserContext";

import { IUser } from "../../interface/User";

const UserCard: React.FC<{ user: IUser }> = ({ user }) => {
  const { db } = useContext(FirebaseCtx);
  const { state } = useContext(UserContext);
  const [userPostsQty, setUserPostsQty] = useState();
  const [totalOfLikes, setTotalOfLikes] = useState();

  const userPosts = async () => {
    const postRef = await db
      .collection("posts")
      .where("userId", "==", state.userId)
      .get();
    const postQty = postRef.size;
    setUserPostsQty(postQty as any);
  };
  userPosts();

  const allUserLikes = async () => {
    const postsRef = await db
      .collection("posts")
      .where("userId", "==", state.userId)
      .get();
    const allLikes = postsRef.docs.map((docs) => docs.data().likes);
    const arrayOfLikes = Object.entries(allLikes).map(
      ([key, value]) =>
        Object.values(value).filter((value) => value === true).length
    );
    const countLikes = arrayOfLikes.reduce(function (a, b) {
      return a + b;
    }, 0);
    setTotalOfLikes(countLikes as any);
  };
  allUserLikes();

  return (
    <Flex
      padding="8"
      direction={{ base: "column", md: "column", lg: "row" }}
      align="center"
      border="2px"
      borderRadius="5px"
      maxW={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
    >
      <Box padding={4} w="100%" align="center">
        <Image
          src={user && user.image}
          borderRadius="full"
          boxSize="165px"
          mb="8"
        />
        <Text as="h2" textStyle="h2" fontSize="24">
          {user && user.name}
        </Text>
      </Box>
      <Box padding={4} w="100%">
        <Text as="h2" textStyle="h2" fontSize="24" mb={4}>
          Quantidade de posts: {userPostsQty}
        </Text>
        <Text as="h2" textStyle="h2" fontSize="24">
          Quantidade total de likes: {totalOfLikes}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserCard;
