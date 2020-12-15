import { getGroupIngredientsByList, listGroupIngredients } from "../src/index";

const axios = require("axios");

jest.mock("axios");

const grpIngReturnValue = [
  {
    cnt_synsrc: "1",
    synsrc: '"Abrotanum 10x, 30x & LM1"',
    rownum: "1",
    grp_id: "1304",
    priming: "Abrotanum",
    category: "Botanical",
    count: "1",
    cnt_nhanes: "0",
  },
];

it("list group ingredients data format", async () => {
  axios.mockResolvedValue({
    data: {
      TOTAL: 1,
      data: [
        {
          CNT_SYNSRC: "1",
          SYNSRC: '"Abrotanum 10x, 30x & LM1"',
          ROWNUM: "1",
          GRP_ID: "1304",
          PRIMING: "Abrotanum",
          CATEGORY: "Botanical",
          COUNT: "1",
          CNT_NHANES: "0",
        },
      ],
    },
  });

  const { total, data } = await listGroupIngredients();

  expect(total).toEqual(27);
  expect(data.length).toEqual(27);
});

it("get group ingredients by list", async () => {
  axios.mockResolvedValue({
    data: {
      TOTAL: 1,
      data: [
        {
          CNT_SYNSRC: "1",
          SYNSRC: '"Abrotanum 10x, 30x & LM1"',
          ROWNUM: "1",
          GRP_ID: "1304",
          PRIMING: "Abrotanum",
          CATEGORY: "Botanical",
          COUNT: "1",
          CNT_NHANES: "0",
        },
      ],
    },
  });

  const { total, data } = await getGroupIngredientsByList();

  expect(total).toEqual(1);
  expect(data).toEqual(grpIngReturnValue);
});
