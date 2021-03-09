import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const StateLearn = () => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yo mama</Text>
      <Text>I am {isHungry ? "hungry" : "full"}!</Text>
      <Button title={isHungry ? "Pour me some milk, please!" : "Thank you!"} disabled={!isHungry} onPress={() => setIsHungry(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 200,
  },
  text: {
    fontSize: 50,
  },
});

export default StateLearn;
