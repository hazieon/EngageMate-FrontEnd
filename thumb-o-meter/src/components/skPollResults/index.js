import React from "react";
import { Button, Progress, Stack } from "@chakra-ui/react";

function SkPollResults({ data, stopPoll }) {
  return (
    <div>
      <h1>Live Poll Results</h1>
      {/* Display set question, options & progress bar for each*/}
      <h2>Question{}</h2>
      <Stack spacing={5}>
        {/* render options and progress bars here
          from data */}
      </Stack>

      <Button colorScheme="red" onClick={stopPoll}>
        Stop Session
      </Button>
    </div>
  );
}

export default SkPollResults;
