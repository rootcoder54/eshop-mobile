import Header from "@/components/header";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/hooks/useAuth";
import { Stack } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const [category, setCategory] = useState<string>("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const user=useAuth()

  return (
    <ThemedView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <Header onCategoryChanged={onDataChanged} />
        }}
      />
      <ThemedText>{category}</ThemedText>
      <ThemedText> utilisateur est : {user.isAuth ? (
        <ThemedText>Connecter</ThemedText>
      ) : (
        <ThemedText>deconnecter</ThemedText>
      )}</ThemedText>
    </ThemedView>
  );
}
