import { listGroupIngredients } from "./src/index";

const test = async () => {
  const response = await listGroupIngredients();
  console.log(response.data);
};

test();
