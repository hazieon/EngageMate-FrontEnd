import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import moment from "moment";
import { calcScheduleDate, Bootcamp_Start, filterData } from "./dateFuncs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftAddon,
  LightMode,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

function SessionFilter({ tableData, filteredData, setFilteredData }) {
  const [searchObj, setsearchObj] = useState({
    week: "",
    day: "",
    coach: "",
    throwaway: false,
  }); // Holds an object with week number and day number to filter by.

  /**
   *  Function to clear the searchObj useState.
   *  Clears the filter ensuring all data is display in the table.
   */
  function clearFilter() {
    setsearchObj({ week: "", day: "", coach: "", throwaway: false });
  }

  useEffect(() => {
    setFilteredData(filterData(tableData, searchObj));
  }, [searchObj, tableData]);

  return (
    <LightMode>
      <Accordion className={style.accordion} allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filter By:
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div className={style.filterContainer}>
              <div className={style.chakraInputs}>
                <div className={style.numberInputs}>
                  <InputGroup size="sm" className={style.filterInput}>
                    <InputLeftAddon children="Week" color="black" />
                    <NumberInput max={16} value={searchObj.week}>
                      <NumberInputField
                        borderRadius="0"
                        onChange={(e) =>
                          setsearchObj({ ...searchObj, week: e.target.value })
                        }
                      />
                    </NumberInput>
                  </InputGroup>

                  <InputGroup size="sm" className={style.filterInput}>
                    <InputLeftAddon children="Day" color="black" />
                    <NumberInput max={7} value={searchObj.day}>
                      <NumberInputField
                        borderRadius="0"
                        onChange={(e) =>
                          setsearchObj({ ...searchObj, day: e.target.value })
                        }
                      />
                    </NumberInput>
                  </InputGroup>
                </div>

                <div className={style.coach}>
                  <InputGroup size="sm">
                    <InputLeftAddon children="Coach" color="black" />
                    <Input
                      type="text"
                      borderRadius="0"
                      onChange={(e) =>
                        setsearchObj({ ...searchObj, coach: e.target.value })
                      }
                      value={searchObj.coach}
                    />
                  </InputGroup>
                </div>

                <div className={style.toggleDiv}>
                  <div>
                    <span>Toggle ThrowAway:</span>{" "}
                    <Checkbox
                      size="lg"
                      className={style.checkbox}
                      onChange={(e) =>
                        setsearchObj({
                          ...searchObj,
                          throwaway: e.target.checked,
                        })
                      }
                    />
                  </div>

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
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </LightMode>
  );
}

export default SessionFilter;
