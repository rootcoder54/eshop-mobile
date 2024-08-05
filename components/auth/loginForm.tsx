import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedTextInput } from "../ThemedInput";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/userContext";
import { useRouter } from "expo-router";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const { isAuth, user, login } = useContext(AuthContext);
  const router=useRouter()
  const authentification = () => {
    if (login) {
      login(username);
    }
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedTextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username ou Email"
      />
      <TouchableOpacity style={styles.btn} onPress={authentification}>
        <ThemedText style={styles.btnText}>Continue</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.seperatorView}>
        <ThemedView
          style={{
            flex: 1,
            borderBottomColor: "grey",
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        />
        <ThemedText style={styles.seperator}>or</ThemedText>
        <ThemedView
          style={{
            flex: 1,
            borderBottomColor: "grey",
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        />
      </ThemedView>

      <ThemedView style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="mail-outline"
            size={24}
            color={"#78716c"}
            style={styles.btnIcon}
          />
          <ThemedText>Continue with Phone</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="logo-apple"
            size={24}
            color={"#78716c"}
            style={styles.btnIcon}
          />
          <ThemedText>Continue with Apple</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="logo-google"
            size={24}
            color={"#fbbf24"}
            style={styles.btnIcon}
          />
          <ThemedText>Continue with Google</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            name="logo-facebook"
            size={24}
            color={"#0284c7"}
            style={styles.btnIcon}
          />
          <ThemedText>Continue with Facebook</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: 100
  },
  input: {
    borderRadius: 10,
    width: 300
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: Colors.primary,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  btnText: {
    color: "#fff",
    fontSize: 16
  },
  btnIcon: {
    position: "absolute",
    left: 16
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10
  },
  seperator: {
    color: Colors.primary,
    fontSize: 16
  }
});
