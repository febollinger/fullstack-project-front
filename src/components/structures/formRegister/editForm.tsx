import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react";

import { InputForm } from "../../fragments/input"
import { ContactUpdate } from "../../../interfaces/contactInterface";
import { contactUpdate } from "../../../schemas/contact";
import { ContactContext } from "../../../providers/contactContext";

export const EditFormContact = () => {
    const {patchContact, oneContact, renderContacts} = useContext(ContactContext)

    const {
        register,
        handleSubmit,
      } = useForm<ContactUpdate>({
        resolver: zodResolver(contactUpdate),defaultValues:{
            name: oneContact.name,
            email: oneContact.email,
            number: oneContact.number
        }

    });



    const submit: SubmitHandler<ContactUpdate> =async  (data) => {

        patchContact(data, oneContact.id)
        
    };

    return (
        <>
            <form className="form form__contact" onSubmit={handleSubmit(submit)}>
                <InputForm label="E-mail" placeholder="Digite seu e-mail" type="text" id="email" className="label label__contactEmail" {...register("email")}/>

                <InputForm label="Name" placeholder="Digite seu nome" type="text" id="name" className="label label__contactName" {...register("name")} />

                <InputForm label="Number" placeholder="Digite um número válido" type="text" id="number" className="label label__contactNum"
                {...register("number")}/>
    

                <button type="submit" className="btn primary">Atualizar contato</button>

            </form> 
        </>
    )
}