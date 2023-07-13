import React, { useContext, useState } from "react";
import { styles } from "./LogOutButton.style";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../../App";
import { useEffect } from "react";

const LogOutButton = () => {
  const navigation = useNavigation();

  const [uriPhotoState, setUriPhotoState] = useState(null);

  const { uriPhoto } = useContext(Context);

  useEffect(() => {
    setUriPhotoState(uriPhoto);
  }, [uriPhoto]);

  const handleLogOut = async (uri) => {
    const data = {
      mail: null,
      uriPhoto: uri,
    };

    try {
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem("dataUser", jsonData);
    } catch (e) {}

    navigation.replace("SignIn");
  };

  return (
    <TouchableOpacity onPress={() => handleLogOut(uriPhotoState)}>
      <Text style={styles.buttonStyle}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;
