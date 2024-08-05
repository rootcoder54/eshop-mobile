import { createContext, useContext } from "react";

export type Auth = {
  isAuth: boolean;
  user?: {
    username: string;
    fullcomple: string;
  };
};

const defaultUser: Auth = {
  isAuth: false
};

export const AuthContext = createContext<Auth>(defaultUser);
