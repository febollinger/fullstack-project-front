import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai"
import { useContext } from "react";

import "./styles.sass"
import { ContactContext } from "../../../providers/contactContext";
import { ModalEditContact } from "../modal/editContact";
import { UserContext } from "../../../providers/userContext";
import { ModalCreateContact } from "../modal/createContact";

export const MainDashboard = () => {
    const {showModalAdd, getOneContact, setShowModalEdit, showModalEdit} = useContext(ContactContext)
    const {client, contacts} = useContext(UserContext)
    const {deleteContact, renderContacts} = useContext(ContactContext)


    const handleEdit = async (id: number) => {
        await getOneContact(id)

        await renderContacts()

        setShowModalEdit(!showModalEdit)
    }

    const handleDelete = async (id: number) => {
        await getOneContact(id)

        deleteContact(id)

        await renderContacts()
    }


    return (
    <main>
        {showModalAdd && <ModalCreateContact />}
        {showModalEdit && <ModalEditContact />}
        
        <div className="container container__main">
            <section className="infos">

                <h2>Olá, {client.name}</h2>

                <h4>Your number: {client.number}</h4>

            </section>
            <section    className="contacts">
                <h1>Contacts</h1>

                <ul className="list">
                    {contacts.length == 0 ? 
                        <li className="card">
                            <h2>Nenhum contato adicionado</h2>
                        </li> : 
                        
                        contacts.map((contact) => 
                        <li key={contact.id} className="card">
                            <div className="person person__infos">
                                <h5>Nome: {contact.name}</h5>
                                <p>Number : {contact.number}</p>
                                <span>Email: {contact.email}</span>
                            </div>
                            <div className="person person__btns">
                                <button onClick={() => handleEdit(contact.id)}><AiFillEdit/></button>
                                <button onClick={() => handleDelete(contact.id)}><AiTwotoneDelete/></button>
                            </div>
                    </li>
                    )}

                </ul>
            </section>
        </div>
    </main>
    )
}