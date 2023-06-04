import { Link } from "react-router-dom";

import logo from "../../assets/logo-fullstack-project.png"
import "./styles.sass"
import "../../styles/_buttons.sass"

export const WelcomePage = () => {
    return (
        <main className="welcome">
            <section className="firstSec">
                <img src={logo} alt="Contacts List logo" className="logo" />

                <h2>Hey! Welcome</h2>
                <h3>
                    That's your virtual agenda.
                </h3>
            </section>
            <section className="secondSec">
                <div>
                    <p>Don't have an account ?</p>
                    <Link className="btn primary" to="/register">Get started</Link>
                </div>
                <div>
                    <Link className="btn secondary" to="/login">I already have an account</Link>
                </div>
            </section>
        </main>
    )
}