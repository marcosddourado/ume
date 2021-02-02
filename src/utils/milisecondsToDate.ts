import moment from "moment";

export function milisecondsToDate(date: number) {
  return moment(date).format("DD/MM/YYYY");
}
