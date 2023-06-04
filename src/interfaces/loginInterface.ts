import z from "zod";
import { schemaLogin } from "../schemas/login";
import { schemaRegisterClient } from "../schemas/register";


export type LoginInterface = z.infer<typeof schemaLogin>;

export type ClientRegister = z.infer<typeof schemaRegisterClient>;