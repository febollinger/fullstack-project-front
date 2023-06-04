import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});