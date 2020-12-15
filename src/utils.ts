import snakecase from "lodash.snakecase";

export const formatData = (responseData: any) => {
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
