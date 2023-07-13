import React from "react";
import { styles } from "./TitleInputTextComponent.styles";
import { Text } from "react-native";

const TitleInputTextComponent = ({ title }) => {
  return <Text style={styles.titleInput}>{title}</Text>;
};

export default TitleInputTextComponent;
