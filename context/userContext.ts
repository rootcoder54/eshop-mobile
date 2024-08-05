import { createContext, useContext } from "react";

export interface Auth  {
  isAuth: boolean,
  user?: {
    username: string,
    fullcomple: string,
  },
  login?:(username:string)=>void,
};

const defaultUser: Auth = {
  isAuth: false,
};

export const AuthContext = createContext<Auth>(defaultUser);
