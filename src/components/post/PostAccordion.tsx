import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IPost } from "../../interface/Post";

const PostAccordion: React.FC<{ post: IPost }> = ({ post }) => {
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
            <Text color="green.900">{post.title}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={10} textColor="green.900" as="h1">
        {post.content}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default PostAccordion;
