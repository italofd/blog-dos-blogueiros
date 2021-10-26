import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { DrawerBody } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FirebaseCtx } from "../contexts/FirebaseContext";
import { UserContext } from "../contexts/UserContext";

const Postform: React.FC<{ isOpen: any; onOpen: any; onClose: any }> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const { db } = useContext(FirebaseCtx);
  const { state } = useContext(UserContext);

  useEffect(() => {
    console.log(title);
  }, [title]);
  useEffect(() => {
    console.log(content);
  }, [content]);
  useEffect(() => {}, []);
  //Desestruturar o user para adicionar o userpost
  const onSubmit = async (postData: any) => {
    console.log(postData);
    await createPost(postData);
    await insertUserPosts(postData);
    reset();
    window.location.reload();
  };
  const createPost = async (postData: any) => {
    const postRef = db.collection("posts").doc();
    const postId = postRef.id;
    console.log("postData", postData);
    await postRef.set({
      userId: state.userId,
      title: postData.title,
      content: postData.content,
      likes: {},
      uid: postId,
    });
    return postId;
  };

  const insertUserPosts = async (postData: any) => {
    const userRef = await db
      .collection("users")
      .doc(state.userId)
      .update({
        ...state.user,
        posts: [...(state.user?.posts as any[]), postData],
      });
    return state.userId;
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            textColor="orange.500"
            textAlign="center"
          >
            CREATE NEW POST
          </DrawerHeader>

          <DrawerBody>
            <Flex
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              direction="column"
              maxW="100%"
            >
              <FormControl textColor="black">
                <FormLabel
                  textColor="orange.500"
                  fontSize="xl"
                  textAlign="center"
                  mb={2}
                  mt={4}
                >
                  Titulo
                </FormLabel>{" "}
                <Input
                  placeholder="Escreva um Titulo"
                  {...register("title", { required: true })}
                  mb={6}
                  border="2px"
                  borderColor="#E2E3DE"
                />
                <FormErrorMessage textColor="orange.500" mb={4}>
                  Você precisa digitar um titulo!
                </FormErrorMessage>
              </FormControl>
              <FormControl textColor="black">
                <FormLabel
                  textColor="orange.500"
                  fontSize="xl"
                  textAlign="center"
                >
                  Conteudo
                </FormLabel>
                <Textarea
                  placeholder="Fala algo ai cabecinha"
                  {...register("content", { required: true })}
                  height="50vh"
                  border="2px"
                  borderColor="#E2E3DE"
                />
                <FormErrorMessage mb={4}>
                  Você precisa colocar um conteudo!
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" alignSelf="flex-end" mt={6}>
                Enviar
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Postform;
