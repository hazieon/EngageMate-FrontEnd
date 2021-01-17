import style from "./userTable.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
} from "@chakra-ui/react";
import { IoTrashBinOutline } from "react-icons/io5";

const UserTable = ({ tableData, deleteUser }) => {
  return (
    <Table variant="simple">
      <TableCaption placement="top">Registered users</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>First name</Th>
          <Th>Surname</Th>
          <Th>Role</Th>
          <Th>Bootcamper Id</Th>
          <Th>Cohort no</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((user) => {
          return (
            <Tr key={user.uuid}>
              <Td>
                <Icon
                  as={IoTrashBinOutline}
                  onClick={() => deleteUser(user.email)}
                />
              </Td>
              <Td>{user.firstname}</Td>
              <Td>{user.surname}</Td>
              <Td>{user.role}</Td>
              <Td>{user.bootcamperid}</Td>
              <Td>{user.cohortno}</Td>
              <Td>{user.email}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UserTable;
