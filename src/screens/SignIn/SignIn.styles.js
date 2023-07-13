import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors  } from "../../styles/colors";

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Colors.WHITE
    },
    container: {
      paddingHorizontal: w(32),
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
   
    content: {
      alignItems: "flex-start",
      width: "100%",
    },
    
    textQuestion: {
      color: Colors.GRAY,
      fontSize: w(14),
      fontWeight: "400",
    },
    
    wrapperForgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginTop: w(20),
    },

    errorTextStyle: {
      fontSize: w(14),
      color: Colors.RED,
    },
    
  });

  export {styles}