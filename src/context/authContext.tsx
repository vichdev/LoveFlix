import React, { createContext, useContext, useState } from 'react';
import { Auth } from '../models/auth';
import api from '../services/api';
import {User} from '../models/user'

const AuthContext = createContext<Auth>({} as Auth)

const Context: React.FC = ({children}) => {
  const [isMessage, setIsMessage] = useState<boolean>(false)
  const [message, setMessage] = useState<string>() 
  const [user, setUser] = useState<User>()

  const aviso = () => {
    setIsMessage(true)
    setTimeout(() => {
      setIsMessage(false)
    }, 5000);
  }

  const Register = (name:string, password:String) => {
    const body = {
      name: name,
      password: password
    }
      api.post("/auth/register", body).then(response => {
        aviso();
        setMessage("Usuario registrado com sucesso")
        sessionStorage.setItem('usuario', JSON.stringify(response.data.token))
      }).catch(() => {
        aviso();
        setMessage('Usuario Já existe')
      })
  }

  const Islogado = (name:string, password:String) => {
    const body = {
      name: name,
      password: password
    }
    try {
      const user = api.post("/auth/register", body);
      return sessionStorage.setItem('usuario', JSON.stringify(user))
    } catch (error) {
    }
  }

  return (
    <AuthContext.Provider value={{Register,Islogado, message, isMessage}}>
        {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  const context = useContext(AuthContext)

  if (!context) { throw new Error('O Hook useAuth deve ser usado com um provider!') }

  return context
}

export { Context, useAuth }