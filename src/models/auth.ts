import { UserInfos } from "./dadosUser";

export interface Auth {
  Register(name: string, password: string): void;
  Login(name: string, password: string): void;
  signOut?: () => void;
  message?: string;
  isMessage?: boolean;
  dados?: UserInfos;
  isAuthenticate: () => boolean;
}
