import { createStandaloneToast } from "@chakra-ui/react";

export function successToast(successObject) {
  const toast = createStandaloneToast();
  toast({
    title: successObject.name,
    description: successObject.message,
    status: "success",
    duration: 9000,
    position: "top",
    isClosable: true,
  });
}

export function burntToast(error) {
  const toast = createStandaloneToast();
  toast({
    title: error.name,
    description: error.message,
    status: "error",
    duration: 10000,
    isClosable: true,
  });
}

export function messageToast(message) {
  const alert = new Audio("alert.wav");
  const toast = createStandaloneToast();
  toast({
    title: "Message To All",
    description: message,
    status: "info",
    duration: 9000,
    position: "top",
    isClosable: true,
  });
  //if message === thumb session starting play different sound
  alert.play();
}
