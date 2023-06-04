import React, { createContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Api, ApiAuthorized } from "../services";
import { ClientRegister, LoginInterface } from "../interfaces/loginInterface";
import { ClientReturn, ClientUpdate } from "../interfaces/clientInterface";
import { ContactReturn } from "../interfaces/contactInterface";

export interface UserProviderProps {
  children: React.ReactNode,
}

export interface User {
  email: string;
  name: string;
  password: string;
  number: string;
}

interface UserLoginResponse {
  token: string;
  user:User
}

interface UserRegisterResponse {
  email: string;
  name: string;
  number: string;
  id:string;
  createdAt: string;
}

export interface UserContext {
  userLogin: (formData: LoginInterface) => Promise<void>,
  userRegisterClient: (formData: ClientRegister) => Promise<void>
  updateClient:(data: ClientUpdate) => Promise<void>
  deleteClient:() => Promise<void>
  client:ClientReturn
  setClient:React.Dispatch<React.SetStateAction<ClientReturn>>
  setLoading:React.Dispatch<React.SetStateAction<boolean>>
  setContacts: React.Dispatch<React.SetStateAction<ContactReturn[]>>
  contacts: ContactReturn[]
}

export const UserContext = createContext({} as UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState<ClientReturn>(
    {} as ClientReturn
  );
  const [contacts, setContacts] = useState<ContactReturn[]>(
    [] as ContactReturn[]
  );

  const location = useLocation();
  const navigate = useNavigate();

  useEffect( () => {

    (async () =>{

      const token = localStorage.getItem("@clientToken");
      
      
      if(token){
        try {
          const result = await ApiAuthorized.get("/client/contact")
   
          setClient(result.data[0])
          setContacts(result.data[0].contacts)

          navigate("/dashboard")
      } catch (error) {
          toast.warning("O token expirou ou não foi validado, tente novamente !")

      }
  

  }})()}, [loading, navigate]);

  const userLogin = async (formData: LoginInterface) => {
    try {
      setLoading(true);
  
      const result = await Api.post<UserLoginResponse>("/login", formData);

      localStorage.setItem("@clientToken", result.data.token);

      toast.success("Login realizado com sucesso");

      const goTo = location.state?.from?.pathname || "/dashboard";

      navigate(goTo, { replace: true });

    } catch (error) {
      toast.warning("Wrong email or password")
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const userRegisterClient = async (formData: ClientRegister) => {
    try {
      setLoading(true);

      const response = await Api.post<UserRegisterResponse>("/client", formData);
      toast.success("Cadastro realizado com sucesso!");

      if (response.data) {
        navigate("/login");
      }
    } catch (error: unknown) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (data: ClientUpdate) => {
    try {
      const response = await ApiAuthorized.patch(
        `/client/${client.id}`,
        data
      );

      setClient(response.data);

      toast.success("Cliente atualizado com sucesso.");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteClient = async () => {
    try {
      await ApiAuthorized.delete(`/client/${client.id}`);

      toast.success("Cliente deletado com sucesso");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <UserContext.Provider
      value={{
        contacts, 
        setContacts,
        userRegisterClient,
        userLogin,
        deleteClient,
        updateClient,
        client,
        setClient,
        setLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};