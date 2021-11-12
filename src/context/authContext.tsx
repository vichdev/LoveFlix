import React, { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "../models/auth";
import api from "../services/api";
import history from "../history";
import { UserInfos } from "../models/dadosUser";

const AuthContext = createContext<Auth>({} as Auth);

const Context: React.FC = ({ children }) => {
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [dados, setDados] = useState<UserInfos>();

  useEffect(() => {
    const getDados = sessionStorage.getItem("dados");
    if (getDados) {
      const dadosRefatorados = JSON.parse(getDados);
      setDados(dadosRefatorados);
    }
  }, []);

  const isAuthenticate = () => {
    if (sessionStorage.getItem("usuario") !== null) {
      return true;
    } else {
      return false;
    }
  };

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
      sessionStorage.setItem("usuario", JSON.stringify(user.data.token));
      sessionStorage.setItem("dados", JSON.stringify(user.data));
      setDados(user.data);
      history.push("/user");
      return user;
    } catch (error) {
      return error;
    }
  };

  async function signOut() {
    sessionStorage.clear();
    history.push("/");
    setTimeout(() => {
      setDados(undefined);
    }, 1000);
  }

  return (
    <AuthContext.Provider
      value={{
        Register,
        Login,
        message,
        isMessage,
        dados,
        signOut,
        isAuthenticate,
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
