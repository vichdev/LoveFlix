export interface Auth{
  Register(name: string, password: string):void,
  Islogado(name: string, password: string):void,
  message?: string,
  isMessage?: boolean 
}