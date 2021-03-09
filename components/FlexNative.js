import React from "react";
import { View } from "react-native";

const FlexNative = () => {
  return (
    <View style={{ height: 300 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
};

export default FlexNative;
