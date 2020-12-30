import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Title = ({ text }) => {
  return (
    <Box p={5} display={{ md: "flex" }} bg="white" justifyContent="center">
      <Text color="white" fontSize="xl">
        {text}
      </Text>
    </Box>
  );
};

export default Title;
