import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    // width: "100%",
    paddingVertical: w(12),
    fontSize: w(16),
    borderBottomWidth: w(1),
    borderColor: Colors.LIGHT_GRAY,
    color: Colors.BLACK,
  },

  titleInput: {
    marginTop: w(40),
    color: Colors.GRAY,
    fontSize: w(14),
    fontWeight: "500",
    marginBottom: w(3),
  },

  wrapperInput: {
    // backgroundColor: 'blue',
    // marginTop: w(50),
    // width: "100%",
    // position: "relative",
    // flexDirection: "row",
    // alignItems: "center",
  },
  passwordSection: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 0,
  },
});

export { styles };