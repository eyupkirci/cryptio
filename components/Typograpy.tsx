import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

type TypographyProps = {
  children: React.ReactNode;
  variant?: "body" | "title" | "subtitle" | "caption";
  style?: any;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  style,
}) => {
  const { colors } = useTheme();
  const textColor = colors.text;
  const textStyle = [styles[variant], { color: textColor }, style];

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold" },
  body: { fontSize: 14 },
  subtitle: { fontSize: 16, fontWeight: "600" },
  caption: { fontSize: 11 },
});

export default Typography;
