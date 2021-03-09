import React from "react";
import { View } from "react-native";

const HeightWidth = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{ width: 50, height: 50, backgroundColor: "powderblue", alignSelf: 'flex-end' }} />
      <View style={{ width: 100, height: 100, backgroundColor: "skyblue" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "steelblue" }} />
    </View>
  );
};

export default HeightWidth;
