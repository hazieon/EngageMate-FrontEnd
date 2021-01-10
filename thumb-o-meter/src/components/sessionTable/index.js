import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Icon,
  InputGroup,
  InputLeftAddon,
  Input,
  LightMode,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { IoTrashBinOutline } from "react-icons/io5";
import moment from "moment";

function SessionTable({ tableData, deleteSession }) {
  // START OF FILTER FUNCTIONALITY (Consider making it its own component or possibly a custom hook).
  const [filteredData, setFilteredData] = useState(tableData); // holds the filtered data, by default is given all tableData
  const [dateTerm, setDateTerm] = useState({ week: "", day: "" }); // Holds an object with week number and day number to filter by.

  // Bootcamp Start Date
  const Bootcamp_Start = moment("2020-09-21 00:00");

  /**
   *  Function takes in the date string set by moment.JS.
   *  Calculates the week and day from the bootcamp start date.
   *  Returns a string with Week Day
   */
  function calcScheduleDate(date) {
    // Remove date ordinal (st, nd, rd, th)
    const dateString = moment(date.replace(/(\d+)(st|nd|rd|th)/, "$1"));

    // Calculate difference between session date and bootcamp start date.
    const diff = moment.duration(dateString.diff(Bootcamp_Start));

    // Adjust to show actual week and day session happened.
    const week = Math.floor(diff.asDays() / 7);
    const day = Math.floor(diff.asDays() % 7);

    return `Week ${week + 1}, Day ${day + 1}`;
  }

  /**
   *  Filters the tableData by the week number and day number entered.
   */
  function filterByDate() {
    // Filter data
    return tableData.filter((session) => {
      const dateString = calcScheduleDate(session.date);

      return (
        dateString.includes(`Week ${dateTerm.week}`) &&
        dateString.includes(`Day ${dateTerm.day}`)
      );
    });
  }

  /**
   *  Function to clear the dateTerm useState.
   *  Clears the filter ensuring all data is display in the table.
   */
  function clearFilter() {
    setDateTerm({ week: "", day: "" });
  }

  // END OF FILTER FUNCTIONALITY

  useEffect(() => {
    setFilteredData(filterByDate());
  }, [dateTerm, tableData]);

  return (
    <>
      {/* FILTER STARTS HERE */}

      <LightMode>
        <div className={style.filterContainer}>
          <h3>Filter By:</h3>

          <div className={style.chakraInputs}>
            <InputGroup size="sm" className={style.filterInput}>
              <InputLeftAddon children="Week" color="black" />
              <NumberInput max={16}>
                <NumberInputField
                  borderRadius="0"
                  onChange={(e) =>
                    setDateTerm({ ...dateTerm, week: e.target.value })
                  }
                />
              </NumberInput>
            </InputGroup>

            <InputGroup size="sm" className={style.filterInput}>
              <InputLeftAddon children="Day" color="black" />
              <NumberInput max={7}>
                <NumberInputField
                  borderRadius="0"
                  onChange={(e) =>
                    setDateTerm({ ...dateTerm, day: e.target.value })
                  }
                />
              </NumberInput>
            </InputGroup>

            <Button
              variant="outline"
              colorScheme="red"
              size="sm"
              className={style.clearBtn}
              onClick={clearFilter}
            >
              Clear
            </Button>
          </div>
        </div>
      </LightMode>

      {/* FILTER ENDS HERE */}

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
