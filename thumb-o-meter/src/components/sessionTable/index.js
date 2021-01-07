import React, { useState, useEffect } from "react";
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

function SessionTable({ tableData, deleteSession }) {
  const [criteria, setCriteria] = useState("date"); // date, question, coach, throwaway
  const [inputType, setInputType] = useState("date"); // date, text
  const [term, setTerm] = useState(""); // Search term entered into input
  const [filteredData, setFilteredData] = useState(tableData); // holds the filtered data, by default is given all tableData

  /**
   *  Sets the criteria useState and also set the inputType
   *  useState which determines which type of input is rendered.
   */
  function setup(value) {
    setTerm("");
    setCriteria(value);
    switch (value) {
      case "date":
        setInputType("date");
        break;
      case "throwaway":
        setInputType("checkbox");
        break;
      default:
        setInputType("text");
    }
  }

  /**
   *  Sets what data is held in the filteredData useState.
   *  Uses the term useState to filter the tablData.
   *  If no term, then whole tableData is returned.
   */
  function filterSessions() {
    if (term === "") return tableData;

    return tableData.filter((session) => {
      if (criteria === "date") {
        // Remove the 'th' from the date string
        const dateString = session.date.replace(/th/, "");

        // Convert to YYYY-MM-DD to be same format as date input
        const convertedDate = new Date(dateString).toISOString();

        return convertedDate.includes(term);
      } else if (criteria === "throwaway") {
        const value = session[criteria];
        return value === term;
      } else {
        const value = session[criteria];
        return String(value).toLowerCase().includes(term.toLowerCase());
      }
    });
  }

  useEffect(() => {
    setFilteredData(filterSessions());
  }, [term]);

  return (
    <>
      <div className={style.filterDiv}>
        <h3>Filter By:</h3>
        <div className={style.filterInputs}>
          <select
            name=""
            id=""
            onChange={(e) => setup(e.target.value)}
            className={style.select}
          >
            <option value="date">Date</option>
            <option value="question">Question</option>
            <option value="coach">Coach</option>
            <option value="throwaway">Throwaway</option>
          </select>
          <input
            className={criteria === "throwaway" ? style.checkbox : style.input}
            type={inputType}
            name=""
            id=""
            value={term}
            placeholder="Enter value"
            onChange={(e) => {
              if (criteria === "throwaway") {
                return setTerm(e.target.checked);
              }
              return setTerm(e.target.value);
            }}
          />
        </div>
      </div>
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
                <Td>{session.date}</Td>
                <Td>{session.question}</Td>
                <Td>{session.outcome + "%"}</Td>
                <Td>{session.coach}</Td>
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
