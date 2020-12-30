import React from "react";
import NavBar from "../../components/navBar";
import AddUserForm from "../../components/addUserForm";

const Admin = ({ role }) => {
  return (
    <>
      <NavBar />
      <AddUserForm />
    </>
  );
};
export default Admin;
