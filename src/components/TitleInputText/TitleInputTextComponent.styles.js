import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  titleInput: {
    marginTop: w(50),
    color: Colors.GRAY,
    fontSize: w(14),
    fontWeight: "500",
    marginBottom: w(15),
  },
});

export { styles };