import { z } from "zod";
import { schemaLogin } from "./login";

export const schemaRegisterClient = schemaLogin.extend({
    name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    number: z.string().nonempty(),
    password: z.string().nonempty()
  });

export const schemaRegisterContact = z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    number: z.string().nonempty()
});