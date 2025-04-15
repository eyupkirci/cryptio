import React from "react";
import { View, StyleSheet } from "react-native";
import { Coin } from "@/context/dataContext";
import Svg, { Path } from "react-native-svg";

const Chart = ({ data }: { data: Coin }) => {
  const width = 100;
  const height = 20;

  const dataPoints = [
    { x: 0, y: data.low_24h },
    { x: 1, y: data.low_24h + data.price_change_24h / 2 },
    { x: 2, y: data.current_price },
    { x: 3, y: data.high_24h },
  ];

  const createLinePath = () => {
    const xScale = (value: number) => (value / (dataPoints.length - 1)) * width;

    const yMin = Math.min(...dataPoints.map((d) => d.y));
    const yMax = Math.max(...dataPoints.map((d) => d.y));
    const yScale = (value: number) =>
      height - ((value - yMin) / (yMax - yMin)) * height;

    let pathData = `M ${xScale(dataPoints[0].x)} ${yScale(dataPoints[0].y)}`;

    for (let i = 1; i < dataPoints.length; i++) {
      pathData += ` L ${xScale(dataPoints[i].x)} ${yScale(dataPoints[i].y)}`;
    }

    return pathData;
  };

  const d = createLinePath();

  return (
    <View style={[styles.container]}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <Path d={d} fill="none" stroke="green" strokeWidth="1.5" />
      </Svg>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
  },
});
