import React, { useState } from "react";
import style from "./addUserForm.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { config } from "../../config";

import { createStandaloneToast } from "@chakra-ui/react";

const AddUserForm = ({ updatePage, setUpdatePage }) => {
  const [isBootcamper, setIsBootcamper] = useState(false);
  const [formData, setFormData] = useState({});
  const { url } = config;
  function successToast() {
    const toast = createStandaloneToast();
    toast({
      title: "User Created",
      description: "User has been inputted to the database.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function burntToast() {
    const toast = createStandaloneToast();
    toast({
      title: "User NOT Created",
      description: "User could NOT be inputted to the database.",
      status: "error",
      duration: 10000,
      isClosable: true,
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const obj = { ...formData, uuid: uuidv4() };
    const res = await fetch(`${url}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    //check the status of the data that is returned. If not 200 then its an error!
    //will add a toast pop up here
    if (res.status === 200) {
      //calls the toast function to create a success popup
      successToast();
      console.log("Success: user added");
      setUpdatePage(!updatePage);
    } else {
      burntToast();
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <FormControl id="role" isRequired>
        <FormLabel>Role</FormLabel>
        <Select
          placeholder="Select role"
          onChange={(e) => {
            handleChange(e);
            if (e.target.value === "bootcamper") {
              setIsBootcamper(true);
              return;
            } else {
              setIsBootcamper(false);
              return;
            }
          }}
        >
          <option value="bootcamper">Bootcamper</option>
          <option value="coach">Coach</option>
          <option value="guest">Guest</option>
        </Select>
      </FormControl>

      {isBootcamper && (
        <FormControl id="bootcamperId" isRequired>
          <FormLabel> Bootcamper Id</FormLabel>
          <NumberInput>
            <NumberInputField onChange={handleChange} />
          </NumberInput>
        </FormControl>
      )}

      <FormControl id="firstName" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" onChange={handleChange} />
      </FormControl>

      <FormControl id="surname" isRequired>
        <FormLabel>Surname</FormLabel>
        <Input placeholder="Surname" onChange={handleChange} />
      </FormControl>

      {isBootcamper && (
        <FormControl id="cohortNo" isRequired>
          <FormLabel> Cohort number</FormLabel>
          <NumberInput>
            <NumberInputField onChange={handleChange} />
          </NumberInput>
        </FormControl>
      )}

      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={handleChange} />
      </FormControl>

      <Button type="submit" colorScheme="teal">
        Add user
      </Button>
    </form>
  );
};

export default AddUserForm;
