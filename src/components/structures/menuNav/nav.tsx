import {MdPersonAddAlt1, MdLogout} from "react-icons/md"
import {useNavigate} from "react-router-dom"
import { useContext } from "react"

import "./styles.sass"
import logo from "../../../assets/logo-removebg.png"
import { ContactContext } from "../../../providers/contactContext"
import { UserContext } from "../../../providers/userContext"

export const Nav = () => {
    const {setShowModalAdd} = useContext(ContactContext)
    const {setClient} = useContext(UserContext)

    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem("@clientToken");

        // setClient(null)
        
        navigate("/");
      };

    return (
        <nav>
            <div className="container container__nav"> 
                <div className="menu">
                    <img src={logo} alt="Agenda virtual" />

                    <div>
                        <button onClick={() => setShowModalAdd(true)}><MdPersonAddAlt1/></button>
                        <button onClick={() => handleLogout()} className="logout"><MdLogout/></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}