import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme
} from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRef, useState } from "react";

const categories = [
  {
    name: "Tiny homes",
    icon: "home"
  },
  {
    name: "Cabins",
    icon: "house-siding"
  },
  {
    name: "Trending",
    icon: "local-fire-department"
  },
  {
    name: "Play",
    icon: "videogame-asset"
  },
  {
    name: "City",
    icon: "apartment"
  },
  {
    name: "Beachfront",
    icon: "beach-access"
  },
  {
    name: "Countryside",
    icon: "nature-people"
  }
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const Header = ({ onCategoryChanged }: Props) => {
  const theme = useColorScheme() ?? "light";
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
    onCategoryChanged(categories[index].name);
  };

  return (
    <ThemedView style={style.container}>
      <ThemedView style={style.actionRow}>
        <Link href={"/(modal)/search"} asChild>
          <TouchableOpacity>
            <ThemedView style={style.searchBtn}>
              <Ionicons
                name="search"
                color={theme === "light" ? "#A2A0A2" : "#fff"}
                size={24}
              />
              <ThemedView>
                <ThemedText>
                  Que cherchez vous ?
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={style.filterBtn}>
          <Ionicons
            name="options-outline"
            color={theme === "light" ? "#A2A0A2" : "#fff"}
            size={24}
          />
        </TouchableOpacity>
      </ThemedView>

      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 16
        }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            ref={(el) => (itemsRef.current[index] = el)}
            key={index}
            style={
              activeIndex === index
                ? style.categoriesBtnActive
                : style.categoriesBtn
            }
            onPress={() => selectCategory(index)}
          >
            <MaterialIcons
              name={item.icon as any}
              size={24}
              color={activeIndex === index ? "#22c55e" : "#6b7280"}
            />
            <Text
              style={
                activeIndex === index
                  ? style.categoryTextActive
                  : style.categoryText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 35,
    display: "flex",
    flexDirection: "column",
    padding: 5
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 5
  },
  searchBtn: {
    flexDirection: "row",
    gap: 10,
    padding: 14,
    alignItems: "center",
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    borderRadius: 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#A2A0A2",
    borderRadius: 24
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: "#6b7280"
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: "#22c55e"
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#22c55e",
    borderBottomWidth: 2,
    paddingBottom: 8
  }
});

export default Header;
