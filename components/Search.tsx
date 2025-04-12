import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface SearchProps {
  onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { colors } = useTheme();
  const backgroundColor = colors.background;
  const textColor = colors.text;
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <TextInput
        placeholderTextColor={textColor}
        style={[styles.input, { color: textColor, borderColor: textColor }]}
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
});

export default Search;
