import { remultExpress } from "remult/remult-express";
import { Transaction } from "../shared/Transaction";

export const api = remultExpress({
    entities: [Transaction]
})