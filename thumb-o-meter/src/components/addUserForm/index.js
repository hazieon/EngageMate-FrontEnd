import React, { useState } from "react";
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

const AddUserFunction = () => {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const obj = { ...formData, uuid: uuidv4() };
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    //check the status of the data that is returned. If not 200 then its an error!
    //will add a toast pop up here
    if (res.status === 200) {
      console.log("Success: user added");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="bootcamperId" isRequired>
        <FormLabel> Bootcamper Id</FormLabel>
        <NumberInput>
          <NumberInputField onChange={handleChange} />
        </NumberInput>
      </FormControl>
      <FormControl id="firstName" isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" onChange={handleChange} />
      </FormControl>
      <FormControl id="surname" isRequired>
        <FormLabel>Surname</FormLabel>
        <Input placeholder="Surname" onChange={handleChange} />
      </FormControl>
      <FormControl id="role" isRequired>
        <FormLabel>Role</FormLabel>
        <Select placeholder="Select role" onChange={handleChange}>
          <option value="bootcamper">Bootcamper</option>
          <option value="coach">Coach</option>
          <option value="guest">Guest</option>
        </Select>
      </FormControl>
      <FormControl id="cohortNo" isRequired>
        <FormLabel> Cohort number</FormLabel>
        <NumberInput>
          <NumberInputField onChange={handleChange} />
        </NumberInput>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" onChange={handleChange} />
      </FormControl>
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default AddUserFunction;
