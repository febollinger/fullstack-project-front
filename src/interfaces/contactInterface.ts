import z from "zod";
import { contactCreate, contactReturn, contactUpdate } from "../schemas/contact";

export type ContactRequest = z.infer<typeof contactCreate>;

export type ContactReturn = z.infer<typeof contactReturn>;

export type ContactUpdate = z.infer<typeof contactUpdate>;