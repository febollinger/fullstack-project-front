import logo from "../../assets/logo-fullstack-project.png"
import { RegisterForm } from "../../components/structures/registerForm"

import "./styles.sass"

export const RegisterPage = () => {
    return (
        <>
            <main className="logg">
                <div className="img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="div-register">
                    <h1>Register</h1>
                    <RegisterForm />
                </div>
            </main>
        </>
    )
}