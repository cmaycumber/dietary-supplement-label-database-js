export const apiUrl = "https://dsld.od.nih.gov/dsld/api/search";

export const headers = {
  accept: "application/json, text/javascript, */*; q=0.01",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/json",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest",
};

export const dbFilter = {
  field: "DBIDS",
  operator: "regex",
  value: "adsld",
};

export const listPagination = {
  page: 1,
  take: 0,
  skip: 0,
  pageSize: 0,
};
