import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import NavBar from "../../components/navBar";
import AddUserForm from "../../components/addUserForm";
import UserTable from "../../components/userTable";
import SessionTable from "../../components/sessionTable";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const Admin = ({ role }) => {
  // need to sort role authentication so this page only visible to coaches
  const [userTableData, setUserTableData] = useState([]);
  const [sessionTableData, setSessionTableData] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://callback-cats.herokuapp.com/users/")
      .then((response) => response.json())
      .then((payload) => setUserTableData(payload.data))
      .catch((error) => console.log(error));
  }, [updatePage]);

  useEffect(() => {
    fetch("https://callback-cats.herokuapp.com/session")
      .then((response) => response.json())
      .then((payload) => setSessionTableData(payload.data))
      .catch((error) => console.log(error));
  }, [updatePage]);

  function deleteUser(id) {
    if (window.confirm("Are you sure?")) {
      fetch(`https://callback-cats.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            console.log("success", data.payload);
            setUpdatePage(!updatePage);
          } else {
            console.log("Failure", data.payload);
          }
        });
    }
  }

  function deleteSession(uuid) {
    if (window.confirm("Are you sure?")) {
      fetch(`https://callback-cats.herokuapp.com/session/${uuid}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            console.log("success! Session deleted");
            setUpdatePage(!updatePage);
          } else {
            console.log("Failure!");
          }
        });
    }
  }

  return (
    <>
      <NavBar />
      <main className={style.main}>
        <Accordion className={style.accordion} allowToggle>
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

        <Tabs className={style.tab}>
          <TabList>
            <Tab>Users</Tab>
            <Tab>Sessions</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className={style.userTable}>
                <UserTable tableData={userTableData} deleteUser={deleteUser} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={style.sessionTable}>
                <SessionTable
                  tableData={sessionTableData}
                  deleteSession={deleteSession}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  );
};
export default Admin;
