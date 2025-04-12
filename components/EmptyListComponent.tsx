import { DataContext } from "@/context/dataContext";
import { useContext } from "react";
import { Pressable } from "react-native";
import Typography from "./Typograpy";

export const EmtpyDataComponent = () => {
  const { refetch } = useContext(DataContext);
  return (
    <Pressable onPress={refetch}>
      <Typography>Press to refresh</Typography>
    </Pressable>
  );
};
