import z from "zod";
import { clientReturn, clientUpdate } from "../schemas/client";


export type ClientReturn = z.infer<typeof clientReturn>;

export type ClientUpdate = z.infer<typeof clientUpdate>;