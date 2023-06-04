import {Link} from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react";

import { InputForm } from "../../fragments/input"
import { UserContext } from "../../../providers/userContext";
import { ClientRegister } from "../../../interfaces/loginInterface";
import { schemaRegisterClient } from "../../../schemas/register";

export const RegisterFormClient = () => {
    const {userRegisterClient}= useContext(UserContext)

    const {
        register,
        handleSubmit
      } = useForm<ClientRegister>({
        resolver: zodResolver(schemaRegisterClient)
      });
    
    const submit: SubmitHandler<ClientRegister> = (formData) => {
        console.log(formData)
        userRegisterClient(formData);
     };

    return (
        <>
            <form className="form form__register" onSubmit={handleSubmit(submit)}>
                <InputForm label="E-mail" placeholder="Digite seu e-mail" type="text" id="email" className="label label__email" {...register("email")} autoComplete="off"/>

                <InputForm label="Name" placeholder="Digite seu nome" type="text" id="name" className="label label__name" {...register("name")} autoComplete="off"/>

                <InputForm label="Password" placeholder="Digite sua senha" type="password" id="password" className="label label__pass"
                {...register("password")} autoComplete="off"/>

                <InputForm label="Number" placeholder="Digite um número válido" type="text" id="number" className="label label__num"
                {...register("number")} autoComplete="off"/>
    

                <button type="submit" className="btn primary">Register</button>

                <Link to="/login" className="btn secondary">Go to Login</Link>
            </form> 
        </>
    )
}