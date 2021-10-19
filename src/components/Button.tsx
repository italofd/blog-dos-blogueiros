import React, { ButtonHTMLAttributes } from "react";
import { Button as ChakraButton } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";

const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    route?: string;
    icon?: any;
    minW?: string;
    mb?: number;
    bgGradient?: string;
    bg?: string;
  }
> = ({ children, route, icon, ...props }) => {
  const history = useHistory();

  const goToRoute = (route?: string) => {
    return route && history.push(route);
  };

  return (
    <ChakraButton
      onClick={() => goToRoute(route)}
      route={route}
      rightIcon={icon}
      {...props}
      variant="solid"
      fontFamily="Abel"
      letterSpacing="1px"
    >
      {children}{" "}
    </ChakraButton>
  );
};

export default Button;
