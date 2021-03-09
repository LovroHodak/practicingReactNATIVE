import React from "react";
import { ScrollView} from "react-native";

import Home from "./components/Home";
import ListViewsNative from "./components/ListViewsNative";
import MyCat from "./components/MyCat";
import StateLearn from "./components/StateLearn";
import TextInpNative from "./components/TextInpNative";

export default function App() {
  return (
    <ScrollView style={{ paddingTop: 22 }}>
      <ListViewsNative />
      <TextInpNative />
      <Home />
      <MyCat />
      <StateLearn />
    </ScrollView>
  );
}
