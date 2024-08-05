import LoginForm from "@/components/auth/loginForm";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/hooks/useAuth";
import { StyleSheet } from "react-native";

export default function ProfilScreen() {
  const user=useAuth()
  return (
    <ThemedView style={styles.container}>
      {user.isAuth ? (
        <ThemedText>index</ThemedText>
      ):(
        <LoginForm />
      )}
      
    </ThemedView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  }
})
