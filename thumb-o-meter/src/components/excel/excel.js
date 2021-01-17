import XLSX from "xlsx";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { config } from "../../config";
import { Input, Button } from "@chakra-ui/react";

const Excel = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [json, setJson] = useState();
  const { url } = config;
  const handleClick = () => {
    if (selectedFile) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        console.log(workbook);
        workbook.SheetNames.forEach((sheet) => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
          console.log(rowObject);
          setJson(JSON.stringify(rowObject, undefined, 4));
        });
      };
    }
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const obj = { json, uuid: uuidv4() };
    // not sure if the above line will add uuid to every object
    const res = await fetch(`${url}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    //check the status of the data that is returned. If not 200 then its an error!
    //will add a toast pop up here
    if (res.status === 200) {
      //calls the toast function to create a success popup
      //   successToast();
      //   console.log("Success: user added");
      //   setUpdatePage(!updatePage);
      // } else {
      //   burntToast();
    }
  }

  return (
    <div>
      <Input type="file" accept=".xls,.xlsx" onChange={handleChange} />
      <Button onClick={handleClick}>Convert</Button>
      <Button onClick={handleSubmit}>Add Users</Button>
    </div>
  );
};

export default Excel;
