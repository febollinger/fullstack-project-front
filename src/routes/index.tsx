import { Routes, Route } from "react-router-dom"

import { WelcomePage } from "../pages/welcome"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { DashboardPage } from "../pages/dashboard"
import { NotFoundPage } from "../pages/notFound"


export const RoutesMain = () => {

    return(
    <Routes>
        <Route path="/" element={< WelcomePage/>} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    )
}