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

    wrapperPhotoEtitProfile: {

    },

    buttonEditProfile: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },

    photoEditProfile: {
        marginTop: w(30),
        width: w(70),
        height: w(70),
        borderRadius: w(70),
    },

    infoUser: {
        alignItems: 'center'
    },

    infoUserName: {
        fontSize: w(24),
        marginTop: w(10),
        fontWeight: '500',
        color: Colors.BLACK
    },

    infoUserPosition: {
        fontSize: w(14),
        marginTop: w(3),
        fontWeight: '500',
        color: Colors.GRAY
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
      // position: "absolute",
      // bottom: w(-20),
      // left: 0,
      color: Colors.RED,
    },
    
  });

  export {styles}