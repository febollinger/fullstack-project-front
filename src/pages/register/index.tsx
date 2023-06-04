import logo from "../../assets/logo-fullstack-project.png"
import { RegisterFormClient } from "../../components/structures/formRegister/registerFormClient"

import "./styles.sass"

export const RegisterPage = () => {
    return (
        <>
            <main className="logg">
                <div className="img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="div-register">
                    <h1>Become a cliente !</h1>
                    <RegisterFormClient />
                </div>
            </main>
        </>
    )
}