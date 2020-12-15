import axios from "axios";
import snakecase from "lodash.snakecase";

const formatData = (responseData: any) => {
  const formattedData = responseData.map((data: any) => {
    const keys = Object.keys(data);
    const newData: any = {};
    keys.forEach((key) => {
      // @ts-ignore
      newData[snakecase(key)] = data[key];
    });
    return newData;
  });
  return formattedData;
};

const apiUrl = "https://dsld.od.nih.gov/dsld/api/search";
const headers = {
  accept: "application/json, text/javascript, */*; q=0.01",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/json",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest",
};

const dbFilter = {
  field: "DBIDS",
  operator: "regex",
  value: "adsld",
};

const listPagination = {
  page: 1,
  take: 0,
  skip: 0,
  pageSize: 0,
};

// export const listIngredients = async () => {
//   const response = await axios({
//     method: "POST",
//     url: `${apiUrl}/lst/Ingredients/filter?list=b`,
//     headers,
//     data: {
//       filters: {
//         filters: [dbFilter],
//         logic: "and",
//       },
//     },
//   });
// };

export const listGroupIngredients = async () => {
  const lists = [..."abcdefghijklmnopqrstuvwxyz".split(""), "0-9"];
  const promises = [];
  for (const list of lists) {
    promises.push(
      axios({
        method: "POST",
        url: `${apiUrl}/lst/groupingredients?list=${list}`,
        headers,
        data: {
          filter: {
            filters: [dbFilter],
            logic: "and",
          },
          ...listPagination,
        },
      })
    );
  }

  const responses = await Promise.all(promises);

  let total = 0;
  const data = [];

  for (const response of responses) {
    total += response.data.TOTAL;
    data.push(formatData(response.data.data));
  }

  return {
    total,
    data,
  };
};

export default {
  listGroupIngredients,
};
