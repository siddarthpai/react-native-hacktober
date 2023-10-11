import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default TextInput;
