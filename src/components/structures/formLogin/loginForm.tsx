import {Link} from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react";

import { InputForm } from "../../fragments/input"
import { UserContext } from "../../../providers/userContext";
import { schemaLogin } from "../../../schemas/login";
import { LoginInterface } from "../../../interfaces/loginInterface";


export const LoginForm = () => {
    const {userLogin}= useContext(UserContext)
    const {
        register,
        handleSubmit
      } = useForm<LoginInterface>({
        resolver: zodResolver(schemaLogin)
      });

    const submit: SubmitHandler<LoginInterface> = (formData) => {
        userLogin(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <InputForm label="E-mail"  placeholder="Digite seu e-mail" type="text" id="email" className="emailLabel" {...register("email")} autoComplete="off" />

                <InputForm label="Password"  placeholder="Digite sua senha" type="password" id="password"  className="passLabel"
                {...register("password")} autoComplete="off"/>

                <button type="submit" className="btn primary">Sign in</button>
                <Link to="/register" className="btn secondary">Register</Link>
            </form> 
        </>
    )
}