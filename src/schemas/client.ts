import { z } from "zod";

export const contactInClient = z
  .object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    number: z.string(),
  })
  .array();

export const clientCreate = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  number: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const clientUpdate = z
  .object({
    name: z.string(),
    email: z.string(),
    number: z.string(),
    password: z.string(),
  })
  .partial()
  .strip();

export const clientReturn = clientCreate.extend({
  id: z.number(),
  createdAt: z.string(),
  contacts: contactInClient.optional(),
});