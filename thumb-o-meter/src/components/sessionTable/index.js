import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { calcScheduleDate } from "../sessionFilter/dateFuncs";
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
import SessionFilter from "../sessionFilter";

function SessionTable({ tableData, deleteSession }) {
  const [filteredData, setFilteredData] = useState(tableData); // holds

  return (
    <>
      <SessionFilter
        tableData={tableData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />

      <Table variant="simple">
        <TableCaption placement="top">Previous Sessions</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Date</Th>
            <Th>Question</Th>
            <Th>Outcome</Th>
            <Th>Coach</Th>
            <Th>Participants</Th>
            <Th>Responses</Th>
            <Th>Throwaway</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((session, index) => {
            return (
              <Tr key={index}>
                <Td>
                  <Icon
                    as={IoTrashBinOutline}
                    onClick={() => deleteSession(session.uuid)}
                  />
                </Td>
                <Td data-date={session.date}>
                  <abbr title={session.date}>
                    {calcScheduleDate(session.date)}
                  </abbr>
                </Td>
                <Td>{session.question}</Td>
                <Td>{session.outcome + "%"}</Td>
                <Td>{session?.coach}</Td>
                <Td>{session.participants}</Td>
                <Td>{session.responses}</Td>
                <Td>{session.throwaway ? " ✅ " : "❌ "}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}

export default SessionTable;
