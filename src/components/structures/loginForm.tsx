import {Link} from "react-router-dom"
import { InputForm } from "../fragments/input"

export const LoginForm = () => {
    return (
        <>
            <form>
                <InputForm label="E-mail" placeholder="Digite seu e-mail" type="text" id="email" className="emailLabel"/>
                <InputForm label="Password" placeholder="Digite sua senha" type="password"id="password" className="passLabel"/>

                <button type="submit" className="btn primary">Sign in</button>
                <Link to="/register" className="btn secondary">Register</Link>
            </form> 
        </>
    )
}