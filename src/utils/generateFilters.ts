import _ from "lodash";

export function generateFilters(filterState) {
  let filters: any[] = [];
  for (const key in filterState) {
    if (
      filterState[key] &&
      filterState[key].value &&
      _.size(String(filterState[key].value))
    ) {
      filters.push({
        field: key,
        operator: "==",
        value: filterState[key].value
      });
    }
  }

  return filters;
}
