import { Target } from "./graphql/queries/schema/types";

export type ShortTarget = Pick<Target, "id" | "approvedName" | "approvedSymbol">;

export interface TabItem {
  name: string,
  label: string,
}

export interface IData {
  label: string;
  value: number;
}