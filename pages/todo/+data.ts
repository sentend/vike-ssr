// https://vike.dev/data
import { db } from "../../database/db";
import { todoTable } from "../../database/schema";

export type Data = { text: string }[];

export default async function data(): Promise<Data> {
  return db.select().from(todoTable).all();
}
