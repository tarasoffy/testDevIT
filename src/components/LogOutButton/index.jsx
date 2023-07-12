import React from "react";
import { styles } from "./LogOutButton.style";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOutButton = () => {

    const navigation = useNavigation()

    const handleLogOut = async() => {

            try {
              await AsyncStorage.setItem('mail', 'null')
            } catch(e) {
              // save error
            }
          

        navigation.replace('SignIn')
    };

  return (
    <TouchableOpacity onPress={handleLogOut}>
      <Text style={styles.buttonStyle}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogOutButton;
