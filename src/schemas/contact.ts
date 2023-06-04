import { z } from "zod";
import { clientReturn } from "./client"; 

export const contactCreate = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  number: z.string().nonempty()
});

export const contactUpdate = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    number: z.string().optional(),
  })
  .partial()
  .strip();

export const contactReturn = contactCreate.extend({
  id: z.number(),
  createdAt: z.string(),
  clientId: z.string().optional(),
  client: clientReturn.omit({ contacts: true, clientId: true }),
});