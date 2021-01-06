import React from "react";
import style from "./index.module.css";
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

function sessionTable({ tableData, deleteSession }) {
  return (
    <Table variant="simple">
      <TableCaption placement="top">Registered users</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Id</Th>
          <Th>UUID</Th>
          <Th>Participants</Th>
          <Th>Responses</Th>
          <Th>Outcome</Th>
          <Th>Question</Th>
          <Th>Coach</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((session, index) => {
          return (
            <Tr key={index}>
              <Td>
                <Icon
                  as={IoTrashBinOutline}
                  onClick={() => deleteSession(session.uuid)}
                />
              </Td>
              <Td>{session.id}</Td>
              <Td data-uuid={session.uuid}>{`${session.uuid.substr(
                0,
                6
              )}...`}</Td>
              <Td>{session.participants}</Td>
              <Td>{session.responses}</Td>
              <Td>{session.outcome}</Td>
              <Td>{session.question}</Td>
              <Td>{session.coach}</Td>
              <Td>{session.date}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default sessionTable;
