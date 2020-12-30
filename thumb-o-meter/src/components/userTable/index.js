import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const UserTable = ({ tableData }) => {
  return (
    <Table variant="simple">
      <TableCaption placement="top">Registered users</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Uuid</Th>
          <Th>Bootcamper Id</Th>
          <Th>First name</Th>
          <Th>Surname</Th>
          <Th>Role</Th>
          <Th>Cohort no</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((user) => {
          return (
            <Tr key={user.uuid}>
              <Td>{user.id}</Td>
              <Td data-uuid={user.uuid}>{`${user.uuid.substr(0, 6)}...`}</Td>
              <Td>{user.bootcamperid}</Td>
              <Td>{user.firstname}</Td>
              <Td>{user.surname}</Td>
              <Td>{user.role}</Td>
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
