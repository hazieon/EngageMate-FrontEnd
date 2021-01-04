import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import AddUserForm from "../../components/addUserForm";
import UserTable from "../../components/userTable";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Admin = ({ role }) => {
  // need to sort role authentication so this page only visible to coaches
  const [userTableData, setUserTableData] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://callback-cats.herokuapp.com/users/")
      .then((response) => response.json())
      .then((payload) => setUserTableData(payload.data))
      .catch((error) => console.log(error));
  }, [updatePage]);

  return (
    <>
      <NavBar />
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Add User Form
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <AddUserForm
              updatePage={updatePage}
              setUpdatePage={setUpdatePage}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <UserTable tableData={userTableData} />
    </>
  );
};
export default Admin;
