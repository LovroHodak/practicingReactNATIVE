import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const TextInpNative = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ backgroundColor: "grey" }}>
      <TextInput
        placeholder="Type here to translate!"
        style={{ height: 60 }}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text>
         {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
};

export default TextInpNative;
