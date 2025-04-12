import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface SearchProps {
  onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {!searchText && (
        <Feather
          name="search"
          size={24}
          color={colors.text}
          style={styles.image}
        />
      )}
      <TextInput
        placeholderTextColor={colors.text}
        style={[styles.input, { color: colors.text, borderColor: colors.text }]}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearchTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  image: { position: "absolute", right: 20, top: 18 },
});

export default Search;
