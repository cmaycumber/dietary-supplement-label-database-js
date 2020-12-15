import axios from "axios";

import { headers, listPagination, apiUrl, dbFilter } from "./constants";
import { IngredientList } from "./types";
import { formatData } from "./utils";

export const getGroupIngredientsByList = async (list?: IngredientList) => {
  const response = await axios({
    method: "POST",
    url: `${apiUrl}/lst/groupingredients?list=${list ?? "a"}`,
    headers,
    data: {
      filter: {
        filters: [dbFilter],
        logic: "and",
      },
      ...listPagination,
    },
  });

  return {
    total: response.data.TOTAL,
    data: formatData(response.data.data),
  };
};

export const listGroupIngredients = async () => {
  const lists = [
    ..."abcdefghijklmnopqrstuvwxyz".split(""),
    "0-9",
  ] as IngredientList[];

  const promises = [];
  for (const list of lists) {
    promises.push(getGroupIngredientsByList(list));
  }

  const responses = await Promise.all(promises);

  let total = 0;
  let data: any = [];
  for (const response of responses) {
    total += response.total;
    data = [...data, ...response.data];
  }

  return {
    total,
    data,
  };
};
