import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AnimationNative from "../components/AnimationNative";
import HomeProps from "../components/HomeProps";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <AnimationNative />
      <Text>
        ProfileSCREEN and some props: This is {route.params.name}'s profile
      </Text>
      <HomeProps name="Veronja" />
      <Button
        color="black"
        title="Go to Animation SCREEN"
        onPress={() => navigation.navigate("AnimationScreen")}
      />
      <Button
        color="black"
        title="Go HOME"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
  },
});

export default ProfileScreen;
