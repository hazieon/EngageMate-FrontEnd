import React, { useEffect } from "react";
import style from "./index.module.css";
import { Button, Progress, Stack, LightMode } from "@chakra-ui/react";

function SkPollResults({ data, stopPoll, socket }) {
  function calculateProgressBar(option) {
    const totalVotes = data.options.reduce((acc, curr) => acc + curr[2], 0);
    return (option[2] / totalVotes) * 100;
  }

  useEffect(() => {
    return () => {
      socket.emit("sessionStop");
    };
  }, []);

  return (
    <div className={style.resultsDiv}>
      <LightMode>
        <h1>Live Poll Results</h1>
        {/* Display set question, options & progress bar for each*/}
        <h2>
          <strong>Question:</strong> {data.question}
        </h2>
        <Stack spacing={5}>
          {/* render options and progress bars here
          from data */}
          {data?.options.map((option, i) => {
            return (
              <div key={i}>
                <p>
                  <strong>Option {option[0]}</strong>: {option[1]}
                </p>
                <Progress
                  colorScheme="pink"
                  value={calculateProgressBar(option) || 0}
                />
              </div>
            );
          })}
        </Stack>

        <Button colorScheme="red" onClick={stopPoll}>
          Stop Session
        </Button>
      </LightMode>
    </div>
  );
}

export default SkPollResults;
