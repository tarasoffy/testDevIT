import { StyleSheet } from "react-native";
import { w } from "../../styles/scale";
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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

  wrapperPhoneInput: {
    flexDirection: "row",
  },

  inputPhoneStyles: {
    color: Colors.GRAY,
    borderColor: Colors.LIGHT_GRAY,
    paddingVertical: w(12),
    paddingHorizontal: w(15),
    borderWidth: w(1),
    height: w(48),
    borderRadius: w(15),
    marginLeft: w(25),
  },

  inputConfirmPhone: {
    paddingVertical: w(12),
    paddingHorizontal: w(18),
    color: Colors.BLACK,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: w(15),
    borderWidth: w(1),
    height: w(48),
    width: w(48),
    marginRight: w(25),
  },

  confirmPhoneNumberWrapper: {
    flexDirection: "row",
  },

  errorTextStyle: {
    fontSize: w(14),
    marginTop: w(5),
    color: Colors.RED,
  },

  errorTextStylePositionAbsolute: {
    position: "absolute",
    bottom: w(-20),
    left: 0,
    fontSize: w(14),
    marginTop: w(5),
    color: Colors.RED,
  },
});

export { styles };
