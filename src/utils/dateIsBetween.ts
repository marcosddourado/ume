import moment from "moment";

export function dateIsBetween(dateToVerify: string, from: string, until: string) {
  const start = moment(from, "DD/MM/YYYY");
  const end = moment(until, "DD/MM/YYYY");

  const momentLogDate = moment(dateToVerify, "DD/MM/YYYY");
  return momentLogDate.isSameOrAfter(start) && momentLogDate.isSameOrBefore(end);
}
