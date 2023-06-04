import {GrClose} from "react-icons/gr"
import { RegisterFormContact } from "../formRegister/registerFormContact"
import { useContext } from "react"

import { ContactContext } from "../../../providers/contactContext"
import "./style.sass"

export const ModalCreateContact = () => {
    const {setShowModalAdd, showModalAdd} = useContext(ContactContext)
    
    return (
        <section className="containerModal">
        <div className="modal modal__add">
            <div>
                <h2>Cadastro de contatos</h2>

                <span onClick={() => setShowModalAdd(!showModalAdd)}><GrClose/></span>
            </div>
            
                <RegisterFormContact/>
         
        </div>
        </section>

    )
}