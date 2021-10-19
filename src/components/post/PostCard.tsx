import { Flex, Text, Button, Image } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FirebaseCtx } from "../../contexts/FirebaseContext";
import { UserContext } from "../../contexts/UserContext";
import { IPost } from "../../interface/Post";
import { IUser } from "../../interface/User";

const Post: React.FC<any> = ({ post, ...props }) => {
  const { actions, state } = useContext(UserContext);
  const { db } = useContext(FirebaseCtx);
  const [postUser, setPostUser] = useState<IUser>();
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(post.likes);
  const [likeFilter, setLikeFilter] = useState();

  const userId = state.userId as string;
  //Pagina para rotas inacessiveis, 404 page; como fazer formulario de contato com email
  useEffect(() => {
    if (post.userId) {
      actions.getUser(post.userId).then((res) => setPostUser(res));
    }
  }, []);

  const getLikes = async () => {
    const postRef = db.collection("posts").doc(post.uid);

    const postData = await postRef.get().then((doc) => doc.data());

    const likes = Object.values(postData?.likes);

    const getLikes = await likes.filter((value) => value === true).length;

    setLikeFilter(getLikes as any);
    console.log("TESTELIKES", getLikes);
  };

  useEffect(() => {
    Object.entries(post.likes).map(([key, value]) => {
      console.log("useeffect", { key, value });

      if (key === userId && value) {
        setIsLiked(value as boolean);
      }
    });
  }, [post.likes, userId, isLiked]);

  const handleLike = async (userId: string, post: any) => {
    const postRef = db.collection("posts").doc(post.uid);

    const postData = await postRef.get().then((doc) => doc.data());

    let trackIsLiked: boolean = false;

    Object.entries(postData?.likes).map(([key, value]) => {
      console.log("handleLike", { key, value });
      trackIsLiked = !value as boolean;
      console.log("trackIsliked", trackIsLiked);
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
  }, [post.likes, isLiked, postLikes]);
  console.log("likeFilter", likeFilter);

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
      //border="3px"
      borderRadius="3px"
      borderColor="#E88821"
      boxShadow="rgba(232,136,33,0.21) 0px 1px 2px 0px, rgba(232,136,33,0.20) 0px 2px 6px 2px;"
      {...props}
    >
      <Flex>
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
      <Text fontSize="large" mt={10}>
        {post.content}
      </Text>

      {/* {postLikes !== undefined && postLikes.} */}
      {!isLiked ? (
        <Button
          size="sm"
          w="20%"
          mt={4}
          onClick={() => handleLike(userId, post)}
          variant="solid"
        >
          Like
        </Button>
      ) : (
        <Button
          size="sm"
          w="20%"
          mt={4}
          onClick={() => handleLike(userId, post)}
          variant="outline"
        >
          {} Likes
        </Button>
      )}
      <Text fontSize="lg"> {likeFilter} </Text>
      <Image src={postUser?.image} alignSelf="end" boxSize="80px" />
    </Flex>
  );
};

export default Post;
