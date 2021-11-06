import { User } from "./user";

export interface Auth{
  Register(name: string, password: string):void,
  Login(name: string, password: string):void,
  signOut?: () => void,
  message?: string,
  isMessage?: boolean,
  user?: User,
  isUsuarioLogado?: boolean
}