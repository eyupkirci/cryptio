import useFetch from "@/hooks/useFetch";
import React, { createContext, useState, useEffect, useContext } from "react";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  atl: number;
  atl_change_percentage: number;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
  sparkline_in_7d: {
    price: number[];
  };
  price_change_percentage_7d_in_currency: number;
}

interface DataContextProps {
  coins: Coin[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export const DataContext = createContext<DataContextProps>({
  coins: [],
  isLoading: false,
  error: null,
  refetch: () => {},
});

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({
  children,
}): JSX.Element => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const { data, isLoading, error, refetch } = useFetch(API_URL);

  useEffect(() => {
    if (data) {
      setCoins(data);
    }
  }, [data]);

  return (
    <DataContext.Provider value={{ coins, isLoading, error, refetch }}>
      {children}
    </DataContext.Provider>
  );
};
