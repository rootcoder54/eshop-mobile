import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="notice"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          title: "Panier",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "bag" : "bag-outline"} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
