import React, { useState, useEffect } from "react";
import { HStack, Box, Button, Input, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import useRoleContext from "../../context/roleContext";
let randomNumber;

const Footer = () => {
  const [joke, setJoke] = useState("");
  const [value, setValue] = useState("");
  const [advice, setAdvice] = useState([[]]);
  const [random, setRandom] = useState(
    Math.floor(Math.random() * advice.length)
  );
  const result = useRoleContext();
  const role = result[2];

  const handleChange = (event) => setValue(event.target.value);
  const handleJoke = () => {
    async function getJoke() {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"
      );
      let data = await response.json();

      setJoke(data.joke);
    }
    getJoke();
  };

  useEffect(
    () =>
      setAdvice([
        <Button
          onClick={() => setRandom(Math.floor(Math.random() * advice.length))}
        >
          <a
            href="https://stackoverflow.com/c/school-of-code/questions"
            target="_blank"
            rel="noreferrer"
          >
            Don't Forget about SOC Overflow
          </a>
        </Button>,

        <Button onClick={() => setRandom(randomNumber)}>
          <a
            href="https://soc-video-viewer.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Remember the helper videos
          </a>
        </Button>,
        <>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />

          <Button onClick={() => setRandom(randomNumber)}>
            <a
              href={`https://google.co.uk#q=${value}`}
              target="_blank"
              rel="noreferrer"
            >
              Have you googled it?
            </a>
          </Button>
        </>,
      ]),
    [value, advice.length]
  );
  randomNumber = Math.floor(Math.random() * advice.length);
  return (
    <>
      <HStack justify="center">
        <ul className={styles.footer}>
          {role === "coach" && (
            <>
              <li>
                {" "}
                <Center>
                  {" "}
                  <Button>
                    <Link to="/admin">Admin</Link>
                  </Button>{" "}
                </Center>
              </li>
              <li>
                {" "}
                <Button mb={4} onClick={handleJoke}>
                  Get Joke
                </Button>
              </li>{" "}
            </>
          )}
          {role === "bootcamper" && <li>{advice[random]}</li>}
        </ul>
      </HStack>
      <Center>
        <p>{joke}</p>
      </Center>
    </>
  );
};

export default Footer;
