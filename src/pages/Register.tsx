import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import Main from "../layouts/Main";
import { FaArrowDown } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/toast";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { UserContext } from "../contexts/UserContext";
import { useHistory } from "react-router";

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const { actions } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (data.password.length < 3) {
      return toast({
        title: "vai toma no cu to cansado menor",
        status: "error",
      });
    } else {
      history.push("/");
      return actions.signUp(data);
    }
  };

  return (
    <Main>
      <Text as="h1" textStyle="h1" mb={20} ml={72}>
        {" "}
        Registre-se abaixo
      </Text>
      {/* <Icon as={FaArrowDown} w={16} h={16} color="orange.500" mb={12} ml={80} /> */}
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        direction="row"
        align="flex-start"
        width="100vh"
      >
        <FormControl mr="16">
          <FormLabel fontSize={20}>Email</FormLabel>
          <Input
            {...register("email", {
              required: true,
            })}
            type="email"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>Password</FormLabel>
          <Input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>Password Confirm</FormLabel>
          <Input
            {...register("passwordConfirm", {
              required: true,
              minLength: 6,
            })}
            type="password"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>Name</FormLabel>
          <Input
            {...register("name", {
              required: true,
            })}
            type="text"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={20}>Country</FormLabel>
          <Input
            {...register("country", {
              required: true,
            })}
            type="text"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>State</FormLabel>
          <Input
            {...register("state", {
              required: true,
            })}
            type="text"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>City</FormLabel>
          <Input
            {...register("city", {
              required: true,
            })}
            type="text"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <FormLabel fontSize={20}>Username</FormLabel>
          <Input
            {...register("username", {
              required: true,
              minLength: 4,
            })}
            type="text"
            variant="filled"
            size="lg"
            mb={6}
            w="50vh"
          />
          <Button type="submit" size="lg">
            {" "}
            Concluir Registro{" "}
          </Button>
        </FormControl>
      </Flex>
    </Main>
  );
};

export default Register;
