import React, { useEffect } from "react";
import useRoleContext from "../../context/roleContext";
import { createStandaloneToast } from "@chakra-ui/react";
import FeaturedMenu from "../../pages/featureMenu";

const BackToHome = () => {
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
  const data = useRoleContext();
  const role = data[2];
  return (
    <div>
      <FeaturedMenu role={role} />
    </div>
  );
};

export default BackToHome;
