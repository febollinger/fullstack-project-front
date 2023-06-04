import React, { createContext, useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import { ApiAuthorized } from "../services";
import { ContactRequest, ContactReturn, ContactUpdate } from "../interfaces/contactInterface";
import { UserContext } from "./userContext";

export interface ContactProviderProps {
  children: React.ReactNode,
}

export interface Contact {
  email: string;
  name: string;
  number: string;
  id:number;
}


export interface ContactContext {
  userRegisterContact: (FormData:ContactRequest) => Promise<void>;
  patchContact: (data: ContactUpdate, contactId: number) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
  showModalAdd: boolean;
  setShowModalAdd: React.Dispatch<React.SetStateAction<boolean>>
  showModalEdit: boolean;
  setShowModalEdit: React.Dispatch<React.SetStateAction<boolean>>
  getOneContact: (id: number) => Promise<void>
  oneContact: Contact
  renderContacts: () => Promise<void>
}

export const ContactContext = createContext({} as ContactContext);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const {contacts, setContacts} = useContext(UserContext)

  const [oneContact, setOneContact] = useState<Contact>({} as Contact); 
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const userRegisterContact = async (formData: ContactRequest) => {
    try {

      const result = await ApiAuthorized.post<ContactReturn>(`/client/contact`, formData);

      toast.success("Contato cadastrado");

      setContacts([...contacts, result.data])
  
    } catch (error: unknown) {
      toast.warning("Ops! algo deu errado, tente novamente !")
      console.log(error)
    } 
  };

  const renderContacts = async () => {

    try{
      const result = await ApiAuthorized.get("/client/contact");
      console.log(result)

    }catch (error){
      toast.warning("O token expirou ou não foi validado, tente novamente !")
      console.log(error)
    }
  };

  const getOneContact = async (id: number) => {
    try {
      const result = await ApiAuthorized.get(`/client/contact/${id}`);

      setOneContact(result.data)

    } catch (error) {
        console.log(error);
    }
  }


  const patchContact = async (data: ContactUpdate, id: number) => {
    try {

      const result = await ApiAuthorized.patch(`/client/contact/${id}`, data);

      if(result){
        setOneContact(result.data)

        toast.success("O contato foi atualizado com sucesso");
  
        setShowModalEdit(!showModalEdit)  
      } 

    } catch (error) {
        console.log(error);
    }
  };

  const deleteContact = async (contactId: number) => {
    try {

      await ApiAuthorized.delete(`/client/contact/${contactId}`);

      toast.success(`O contato foi deletado com sucesso!`);

    } catch (error) {

        console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        renderContacts,
        oneContact,
        getOneContact,
        userRegisterContact,
        deleteContact,
        patchContact,
        showModalAdd,
        setShowModalAdd,
        setShowModalEdit,
        showModalEdit
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};