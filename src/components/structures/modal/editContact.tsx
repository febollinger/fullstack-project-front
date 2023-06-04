import {GrClose} from "react-icons/gr"
import { useContext } from "react"

import "./style.sass"
import { ContactContext } from "../../../providers/contactContext"
import { EditFormContact } from "../formRegister/editForm"

export const ModalEditContact = () => {
    const {setShowModalEdit, showModalEdit} = useContext(ContactContext)
    
    return (
        <section className="containerModal">
            <div className="modal modal__edit">
                <div>
                    <h2>Edição de contato</h2>

                    <span onClick={() => setShowModalEdit(!showModalEdit)}><GrClose/></span>
                </div>

                    <EditFormContact/>
                </div>
        </section>
    )
}