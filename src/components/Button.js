import React from "react";
import { Button as ChakraButton } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";

const Button = ({ children, route, icon }) => {
  const history = useHistory();

  const goToRoute = (route) => {
    return history.push(route);
  };

  return (
    <ChakraButton
      onClick={() => goToRoute(route)}
      rightIcon={icon}
      variant="solid"
    >
      {children}{" "}
    </ChakraButton>
  );
};

export default Button;
