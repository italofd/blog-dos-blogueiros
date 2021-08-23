import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PostAccordion = ({ post }) => {
  return (
    <AccordionItem p={4}>
      <h2>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            flexDirection={{
              base: "column",
              medium: "column",
              lg: "row",
              xl: "row",
            }}
          >
            <Text color="white">{post.title}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={10}>{post.content}</AccordionPanel>
    </AccordionItem>
  );
};

export default PostAccordion;
