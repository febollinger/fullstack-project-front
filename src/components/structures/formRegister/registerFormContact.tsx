import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react";

import { InputForm } from "../../fragments/input"
import { ContactRequest } from "../../../interfaces/contactInterface";
import { contactCreate } from "../../../schemas/contact";
import { ContactContext } from "../../../providers/contactContext";

export const RegisterFormContact = () => {
    const { userRegisterContact, setShowModalAdd, showModalAdd } = useContext(ContactContext);

    const {
        register,
        handleSubmit,
      } = useForm<ContactRequest>({
        resolver: zodResolver(contactCreate),
      });
    
    const submit: SubmitHandler<ContactRequest> = (formData) => {
        userRegisterContact(formData);

        setShowModalAdd(!showModalAdd)
     };

    return (
        <>
            <form className="form form__contact" onSubmit={handleSubmit(submit)}>
                <InputForm label="E-mail" placeholder="Digite seu e-mail" type="text" id="email" className="label label__contactEmail" {...register("email")} autoComplete="off"/>

                <InputForm label="Name" placeholder="Digite seu nome" type="text" id="name" className="label label__contactName" {...register("name")} autoComplete="off"/>

                <InputForm label="Number" placeholder="Digite um número válido" type="text" id="number" className="label label__contactNum"
                {...register("number")} autoComplete="off"/>
    

                <button type="submit" className="btn primary">Adicionar contato</button>

            </form> 
        </>
    )
}