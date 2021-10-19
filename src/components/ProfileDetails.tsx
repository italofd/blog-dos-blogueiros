import {
  Box,
  Image,
  Input,
  Progress,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { IUser } from "../interface/User";

const ProfileDetails: React.FC<{
  user: IUser;
  handleUpload: (image: any) => void;
  progress: number;
  handleChange: (e: any) => void;
}> = ({ user, progress, handleUpload, handleChange }) => {
  

  return (
    <Flex
      w={{ base: "100%", lg: "100%", xl: "100%" }}
      flexDirection={{
        base: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
      align="flex-start"
    >
      <Box>
        <Image
          boxSize={{
            base: "350px",
            md: "400px",
            lg: "450px",
            xl: "450px",
          }}
          objectFit="cover"
          minW={{ base: "300px", md: "400px", lg: "400px", xl: "450px" }}
          minH={{ base: "300px", md: "400px", lg: "400px", xl: "400px" }}
          borderRadius="5px"
          marginBottom={{ base: "25px", md: "0px", lg: "0px", xl: "0px" }}
          src={user?.image}
        ></Image>
        <Input
          type="file"
          onChange={handleChange}
          variant="outline"
          size="sm"
          fontFamily="Open Sans, sans-serif"
        />
        <Progress value={progress} max={100} />
        <Button onClick={handleUpload} ml={48} mt={6}>
          Upload
        </Button>
      </Box>

      <Box
        padding={{ base: 8, lg: 10, xl: 10 }}
        border="2px"
        borderRadius="5px"
        boxSize={{
          base: "350px",
          md: "400px",
          lg: "450px",
          xl: "450px",
        }}
        ml={{ base: 0, md: 10, lg: 10, xl: 10 }}
        minH={{ xl: "560px" }}
        textAlign="center"
      >
        <Text fontSize="2xl" color={"orange.500"}>
          Nome
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.name}
        </Text>
        <Text fontSize="2xl" color={"orange.500"}>
          Usuario
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.username}
        </Text>
        <Text fontSize="2xl" color={"orange.500"}>
          Email
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.email}
        </Text>
        <Text fontSize="2xl" color={"orange.500"}>
          Cidade
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.city}
        </Text>
        <Text fontSize="2xl" color={"orange.500"}>
          Estado
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.state}
        </Text>
        <Text fontSize="2xl" color={"orange.500"}>
          País
        </Text>
        <Text pb={4} fontSize="xl">
          {user?.country}
        </Text>
        <Text pb={2} fontSize="2xl"></Text>
      </Box>
    </Flex>
  );
};

export default ProfileDetails;
