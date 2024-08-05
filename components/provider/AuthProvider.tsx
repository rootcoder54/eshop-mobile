import { Auth, AuthContext } from "@/context/userContext";
import { useState } from "react";

type Props = {
  value: Auth;
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [username, setusername] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const login = (username: string) => {
    setusername(username);
    setIsAuth(true);
  };
  const value: Auth = {
    isAuth: isAuth,
    user: {
      username: username,
      fullcomple: username
    },
    login:login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
