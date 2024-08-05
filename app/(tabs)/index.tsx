import Header from '@/components/header';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <ThemedView style={{ flex: 1}}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <ThemedText>
        index
      </ThemedText>
    </ThemedView>
  );
}

