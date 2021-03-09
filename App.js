import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import FlexNative from "./components/FlexNative";
import HeightWidth from "./components/HeightWidth";

import Home from "./components/Home";
import ImagesNative from "./components/ImagesNative";
import MyCat from "./components/MyCat";
import StateLearn from "./components/StateLearn";
import TextInpNative from "./components/TextInpNative";

export default function App() {
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <>
          <ImagesNative />
          <FlexNative />
          <HeightWidth />
          <TextInpNative />
          <Home />
        </>
      }
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      ListFooterComponent={
        <>
          <MyCat />
          <StateLearn />
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const data = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Dominic" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Pevin" },
  { key: "Pan" },
  { key: "Pominic" },
  { key: "Zackson" },
  { key: "Zames" },
]
