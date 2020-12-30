import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
const Footer = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    async function getJoke() {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"
      );
      let data = await response.json();
      console.log(data);
      setJoke(data.joke);
    }
    getJoke();
  }, []);

  return (
    <Flex justify="center">
      <Box w="75%" p={10} justify="center" align="center">
        <h2>{joke}</h2>
      </Box>
    </Flex>
  );
};

export default Footer;
