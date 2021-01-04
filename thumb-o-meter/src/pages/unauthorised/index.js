import React, { useEffect } from "react";
import Login from "../../pages/login/index";
import { createStandaloneToast } from "@chakra-ui/react";
import useRoleContext from "../../context/roleContext";

const Unauthorised = () => {
  const result = useRoleContext();
  const role = result[2];

  //function for failed popup
  //pass in or create an object with {name: "", message: ""}
  function burntToast(error) {
    const toast = createStandaloneToast();
    toast({
      title: error.name,
      description: error.message,
      status: "warning",
      position: "top",
      duration: 10000,
      isClosable: true,
    });
    console.log(error);
  }

  useEffect(() => {
    burntToast({
      name: "Unauthorised!",
      message: "Authorisation FAILED, contact administrator",
    });
  }, []);

  return (
    <div>
      Contact Administrator
      <Login />
    </div>
  );
};

export default Unauthorised;
