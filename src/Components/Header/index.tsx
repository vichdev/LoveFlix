import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import Logo from "../../common/Logo";
import Modal from "../Modal";
import Forms from "../../common/Form";
import Input from "../../common/Input";
import Label from "../../common/Labels";
import { IPropsModal } from "../Modal/types";
import { FiMenu } from "react-icons/fi";
import { useAuth } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import ErrorMessage from "../../common/ErrorMessage";
import MobileMenu from "../MobileMenu";
import { UserInfos } from "../../models/dadosUser";
import { User } from "../../models/user";
import { Drink } from "../../models/drink";
import { Dessert } from "../../models/desserts";
import { Food } from "../../models/food";
import { Movie } from "../../models/movie";

const Header: React.FC<IPropsModal> = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [drink, setDrink] = useState<string>("");
  const [dessert, setDessert] = useState<string>("");
  const [movie, setMovie] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [drinks, setDrinks] = useState<Array<Drink>>([]);
  const [desserts, setDesserts] = useState<Array<Dessert>>([]);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openFood, setOpenFood] = useState<boolean>(false);
  const [openDrink, setOpenDrink] = useState<boolean>(false);
  const [openDessert, setOpenDessert] = useState<boolean>(false);
  const [openMovie, setOpenMovie] = useState<boolean>(false);
  const [logout, setLogOut] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  const { Login, isMessage, message, dados, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    await api.get("foods/foods", { headers: header }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setOpen(false);
      } else {
        alert("deu ruiim");
      }
    });
  };

  const addFood = async (food: string) => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    const body = {
      food: food,
    };
    await api.post("foods/food", body, { headers: header }).then((response) => {
      if (response.status === 200) {
        setOpen(false);
      } else {
        alert("deu ruiim");
      }
    });
  };

  const addDessert = async (dessert: string) => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    const body = {
      dessert: dessert,
    };
    await api
      .post("desserts/dessert", body, { headers: header })
      .then((response) => {
        if (response.status === 200) {
          setOpenDessert(false);
        } else {
          alert("deu ruiim");
        }
      });
  };

  const addMovie = async (movie: string) => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    const body = {
      movie: movie,
    };
    await api
      .post("movies/movie", body, { headers: header })
      .then((response) => {
        if (response.status === 200) {
          setOpenMovie(false);
        } else {
          alert("deu ruiim");
        }
      });
  };

  const addDrink = async (drink: string) => {
    const header = {
      Authorization: `Bearer ${dados?.token}`,
    };
    const body = {
      drink: drink,
    };
    await api
      .post("drinks/drink", body, { headers: header })
      .then((response) => {
        if (response.status === 200) {
          setOpenDrink(false);
        } else {
          alert("deu ruiim");
        }
      });
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Logo />
            <Styles.BtnLogIn onClick={() => setOpen(!open)}>
              Entrar
            </Styles.BtnLogIn>
            <FiMenu onClick={() => setOpen(!open)} />
          </Styles.HeaderWrapper>
        </Styles.Header>
      ) : (
        <Styles.Header>
          <Styles.HeaderWrapper>
            <Styles.UserWrapper>
              <Logo />
              <Styles.UserLogged style={{ color: "#fff" }}>
                Bem Vindo(a), {dados?.user.name}
              </Styles.UserLogged>
            </Styles.UserWrapper>
            <Styles.BtnGenerate onClick={() => setOpenFood(!openFood)}>
              + Comida
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpenDessert(!openDessert)}>
              + Sobremesa
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpenDrink(!openDrink)}>
              + Bebida
            </Styles.BtnGenerate>
            <Styles.BtnGenerate onClick={() => setOpenMovie(!openMovie)}>
              + Filme
            </Styles.BtnGenerate>
            <Styles.LogOut onClick={() => setLogOut(!logout)}>
              Sair
            </Styles.LogOut>
            <FiMenu onClick={() => setMobile(!mobile)} />
          </Styles.HeaderWrapper>
        </Styles.Header>
      )}
      <Modal isOpen={open} onClose={() => setOpen(!open)}>
        <Forms>
          <Label name="Usuário" color="#e50000" />
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label name="Senha" color="#e50000" />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styles.BtnModal onClick={() => Login(name, password)}>
            Entrar
          </Styles.BtnModal>
          {isMessage ? (
            <ErrorMessage>
              {" "}
              Usuário não existe ou não está cadastrado.{" "}
            </ErrorMessage>
          ) : (
            ""
          )}
        </Forms>
      </Modal>
      <Modal isOpen={openFood} onClose={() => setOpenFood(!openFood)}>
        <Forms>
          <Label name="Comida" color="#e50000" />
          <Input
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <Styles.BtnModal onClick={() => addFood(food)}>
            Cadastrar
          </Styles.BtnModal>
          {isMessage ? <h1>{message}</h1> : ""}
        </Forms>
      </Modal>
      <Modal isOpen={openDessert} onClose={() => setOpenDessert(!openDessert)}>
        <Forms>
          <Label name="Sobremesa" color="#e50000" />
          <Input
            type="text"
            value={dessert}
            onChange={(e) => setDessert(e.target.value)}
          />
          <Styles.BtnModal onClick={() => addDessert(dessert)}>
            Cadastrar
          </Styles.BtnModal>
          {isMessage ? <h1>{message}</h1> : ""}
        </Forms>
      </Modal>
      <Modal isOpen={openDrink} onClose={() => setOpenDrink(!openDrink)}>
        <Forms>
          <Label name="Bebida" color="#e50000" />
          <Input
            type="text"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
          />
          <Styles.BtnModal onClick={() => addDrink(drink)}>
            Cadastrar
          </Styles.BtnModal>
          {isMessage ? <h1>{message}</h1> : ""}
        </Forms>
      </Modal>

      <Modal isOpen={openMovie} onClose={() => setOpenDrink(!openMovie)}>
        <Forms>
          <Label name="Movie" color="#e50000" />
          <Input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <Styles.BtnModal onClick={() => addMovie(movie)}>
            Cadastrar
          </Styles.BtnModal>
          {isMessage ? <h1>{message}</h1> : ""}
        </Forms>
      </Modal>

      <Modal isOpen={logout} onClose={() => setLogOut(!logout)}>
        <Styles.LogOutWrapper>
          <Styles.MessageLogOut>
            Tem certeza que deseja Sair?
          </Styles.MessageLogOut>
          <Styles.ButtonWrapper>
            <Styles.ButtonLogOut onClick={signOut}>Sim</Styles.ButtonLogOut>
            <Styles.ButtonLogOut onClick={() => setLogOut(!logout)}>
              Não
            </Styles.ButtonLogOut>
          </Styles.ButtonWrapper>
        </Styles.LogOutWrapper>
      </Modal>
      <MobileMenu />
    </>
  );
};

export default Header;
