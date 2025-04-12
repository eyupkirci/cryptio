import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export function useData() {
  const { coins, isLoading, error, refetch } = useContext(DataContext);

  return {
    coins,
    isLoading,
    error,
    refetch,
  };
}
