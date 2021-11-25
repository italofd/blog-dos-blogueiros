import { Flex, Text, Button, Image } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FirebaseCtx } from "../../contexts/FirebaseContext";
import { UserContext } from "../../contexts/UserContext";
import { IUser } from "../../interface/User";
import { FiThumbsUp } from "react-icons/fi";

const Post: React.FC<any> = ({ post, ...props }) => {
  const { actions, state } = useContext(UserContext);
  const { db } = useContext(FirebaseCtx);
  const [postUser, setPostUser] = useState<IUser>();
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(post.likes);
  const [likeFilter, setLikeFilter] = useState();
  const [postData, setPostData] = useState();

  const userId = state.userId as string;
  //Pagina para rotas inacessiveis, 404 page; como fazer formulario de contato com email

  useEffect(() => {
    if (post.userId) {
      actions.getUser(post.userId).then((res) => setPostUser(res));
    }
  }, []);

  useEffect(() => {
    if (post.likes === undefined) return;
    Object.entries(post.likes).map(([key, value]) => {
      if (key === userId) {
        setIsLiked(value as boolean);
      }
    });
  }, []);

  const getLikes = async () => {
    setTimeout(async () => {
      const postRef = db.collection("posts").doc(post.uid);

      const postData = await postRef.get().then((doc) => doc.data());

      if (postData === undefined || null) return;

      const likes = Object.values(postData?.likes);

      const getLikes = likes.filter((value) => value === true).length;

      setLikeFilter(getLikes as any);
    }, 300);
  };

  const handleLike = async (userId: string, post: any) => {
    const postRef = db.collection("posts").doc(post.uid);

    const postData = await postRef.get().then((doc) => doc.data());

    let trackIsLiked: boolean = true;

    Object.entries(postData?.likes).map(([key, value]) => {
      trackIsLiked = !value as boolean;
      setIsLiked(trackIsLiked);
    });

    await postRef.set({
      userId: post.userId,
      title: post.title,
      content: post.content,
      uid: post.uid,
      likes: { ...postLikes, [userId]: trackIsLiked },
    });
    return trackIsLiked;
  };

  useEffect(() => {
    getLikes();
  }, [post.likes, isLiked, postLikes, handleLike]);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <Flex
      as="article"
      minH="300px"
      minW="100%"
      direction="column"
      maxW={{ base: "80%", md: "100%", lg: "100%", xl: "100%" }}
      justify="flex-start"
      p={8}
      my={8}
      borderRadius="3px"
      borderColor="#E88821"
      boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px
      13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
      {...props}
    >
      <Flex>
        {" "}
        <Text fontSize="x-large" mt={4} textColor="green.700">
          {postUser !== undefined && postUser.username}
        </Text>
        <Text fontSize="xx-large" padding={2} color="#E88821">
          [
        </Text>
        <Text as="h1" textStyle="h1" fontSize="x-large" pt={4}>
          {post.title}
        </Text>
        <Text fontSize="xx-large" padding={2} color="#E88821">
          ]
        </Text>
      </Flex>
      <Text fontSize="large" mt={4}>
        {post.content}
      </Text>

      <Flex flexDirection="row" justify="space-between" align="end" pt={10}>
        {!isLiked ? (
          <>
            <Button
              size="sm"
              w="15%"
              mt={4}
              onClick={() => handleLike(userId, post)}
              variant="solid"
            >
              <FiThumbsUp /> <Text ml={2}> Like : {likeFilter} </Text>
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              w="15%"
              mt={4}
              onClick={() => handleLike(userId, post)}
              variant="outline"
              borderColor="orange.500"
            >
              <FiThumbsUp /> <Text ml={2}>Like : {likeFilter}</Text>
            </Button>
          </>
        )}{" "}
        <Image
          src={postUser?.image}
          alignSelf="end"
          boxSize="80px"
          borderRadius="50%"
          border="2px"
          borderColor="orange.500"
        />
      </Flex>
    </Flex>
  );
};

export default Post;
