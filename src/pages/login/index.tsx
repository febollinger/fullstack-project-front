import logo from "../../assets/logo-fullstack-project.png"
import { LoginForm } from "../../components/structures/loginForm"
import "./styles.sass"

export const LoginPage = () => {
    return (
        <>
            <main className="logg">
                <div className="img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="div-form">
                    <h1>Login</h1>
                    <LoginForm />
                </div>
            </main>
        </>
    )
}