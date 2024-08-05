import { Auth, AuthContext } from "@/context/userContext";

type Props = {
    value:Auth;
    children: React.ReactNode;
  };

export default function AuthProvider({value,children}:Props){
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}