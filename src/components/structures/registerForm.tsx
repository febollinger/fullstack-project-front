import {Link} from "react-router-dom"
import { InputForm } from "../fragments/input"

export const RegisterForm = () => {
    return (
        <>
            <form className="form-register">
                <InputForm label="E-mail" placeholder="Digite seu e-mail" type="text" id="email" className="labelEmail"/>

                <InputForm label="Password" placeholder="Digite sua senha" type="password" id="password" className="labelPass"/>

                <InputForm label="Number" placeholder="Digite um número válido" type="text" id="number" className="labelNum"/>
    

                <button type="submit" className="btn primary">Register</button>
                <Link to="/login" className="btn secondary">Go to Login</Link>
            </form> 
        </>
    )
}