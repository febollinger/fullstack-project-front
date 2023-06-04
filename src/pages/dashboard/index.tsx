import { MainDashboard } from "../../components/structures/main/mainDash"
import { Nav } from "../../components/structures/menuNav/nav"
import "./styles.sass"

export const DashboardPage = () => {
    return (
        <div>
            <Nav />
            <MainDashboard />
        </div>    
    )
}