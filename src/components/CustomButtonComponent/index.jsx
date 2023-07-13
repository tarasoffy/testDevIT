import React from "react";
import { styles } from "./CustomButtonComponent.styles";
import { TouchableOpacity, Text } from "react-native";

const CustomButtonComponent = ({ title, onPress, margin }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, margin]}>
      <Text style={styles.textInButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;
