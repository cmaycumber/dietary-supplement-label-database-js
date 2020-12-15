export type IngredientListChar =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "0-9";

export type PageSize = 10 | 15 | 25 | 50 | 100 | 1000 | "ALL";

export type Request = {
  page?: number;
  pageSize?: PageSize;
  skip?: number;
  filters?: {
    field: string;
    operator: string;
    value: string;
  }[];
};

export type GroupIngredientsRequest = {
  list?: IngredientListChar;
} & Request;
