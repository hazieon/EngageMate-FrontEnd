import moment from "moment";

// Bootcamp Start Date
export const Bootcamp_Start = moment("2020-09-21 00:00");

/**
 *  Function takes in the date string set by moment.JS.
 *  Calculates the week and day from the bootcamp start date.
 *  Returns a string with Week Day
 */
export function calcScheduleDate(date) {
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
export function filterData(tableData, searchObj) {
  // Filter data
  return tableData.filter((session) => {
    const dateString = calcScheduleDate(session.date);

    if (searchObj.throwaway) {
      return (
        dateString.includes(`Week ${searchObj.week}`) &&
        dateString.includes(`Day ${searchObj.day}`) &&
        session.coach?.toLowerCase().includes(searchObj.coach?.toLowerCase()) &&
        session.throwaway === searchObj.throwaway
      );
    } else {
      return (
        dateString.includes(`Week ${searchObj.week}`) &&
        dateString.includes(`Day ${searchObj.day}`) &&
        session.coach?.toLowerCase().includes(searchObj.coach?.toLowerCase())
      );
    }
  });
}
