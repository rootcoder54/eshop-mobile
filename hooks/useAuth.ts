import { AuthContext } from "@/context/userContext";
import { useContext } from "react";

export function useAuth(){
    const user=useContext(AuthContext)
    return user
}