import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Main from "../layouts/Main";
import { Button } from "@chakra-ui/button";
import { FirebaseCtx } from "../contexts/FirebaseContext";
import { useHistory } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { auth } = useContext(FirebaseCtx);
  const history = useHistory();

  interface LoginDTO {
    email: string;
    password: string;
  }
  const signIn = async ({ email, password }: LoginDTO) => {
    const userLogin = await auth.signInWithEmailAndPassword(email, password);
    history.push("/");
  };

  return (
    <Main>
      <Text as="h1" textStyle="h1" mb={20} textAlign="center">
        {" "}
        LOGIN{" "}
      </Text>
      <Flex
        align="center"
        as="form"
        onSubmit={handleSubmit(signIn)}
        width="100%"
      >
        <FormControl flexDirection="column">
          <Input
            {...register("email")}
            type="email"
            variant="filled"
            size="md"
            w="500px"
            mb={6}
            mr={8}
            placeholder="Email"
          ></Input>
          <Input
            {...register("password")}
            type="password"
            variant="filled"
            size="md"
            w="500px"
            mb={6}
            placeholder="Password"
          ></Input>
          <br />
          <Button type="submit" size="md">
            SignIn
          </Button>
        </FormControl>
      </Flex>
    </Main>
  );
};

export default Login;
