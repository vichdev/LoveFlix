import React, { createContext, useContext, useState } from "react";
import { Auth } from "../models/auth";
import api from "../services/api";
import { User } from "../models/user";
import history from "../history";

const AuthContext = createContext<Auth>({} as Auth);

const Context: React.FC = ({ children }) => {
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [user, setUser] = useState<User>();
  const [isUsuarioLogado, setIsUsuarioLogado] = useState<boolean>(
    !!sessionStorage.getItem("usuario")
  );

  const Register = (name: string, password: String) => {
    const body = {
      name: name,
      password: password,
    };
    api
      .post("/auth/register", body)
      .then((response) => {
        sessionStorage.setItem("usuario", JSON.stringify(response.data.token));
      })
      .catch(() => {});
  };

  const Login = async (name: string, password: String) => {
    const body = {
      name: name,
      password: password,
    };
    try {
      const user = await api.post("/auth/authenticate", body);
      console.log(user);
      sessionStorage.setItem("usuario", JSON.stringify(user.data.token));
      setUser(user.data.user);
      history.push("/user");
      setIsUsuarioLogado(true);
      return user;
    } catch (error) {
      return error;
    }
  };

  async function signOut() {
    sessionStorage.clear();
    setIsUsuarioLogado(false);
    setTimeout(() => {
      setUser(undefined);
    }, 1000);
  }

  return (
    <AuthContext.Provider
      value={{
        Register,
        Login,
        message,
        isMessage,
        user,
        signOut,
        isUsuarioLogado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("O Hook useAuth deve ser usado com um provider!");
  }

  return context;
}

export { Context, useAuth };
