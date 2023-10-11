import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ProfileScreen from "./ProfileScreen";

const HomeScreen: React.FC = ({ navigation }) => {
  const [text, setText] = useState("");
  const handlePress = () => {
    alert(`You typed: ${text}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Screen</Text>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type something..."
        />
        <Button onPress={handlePress} title="Submit" />
        <Button
          onPress={() => navigation.navigate("Profile")}
          title="Navigate to screen 2"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
