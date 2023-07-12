import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
    titlePage: {
        fontSize: w(24),
        fontWeight: "500",
        marginTop: w(110),
        color: Colors.BLACK,
      },
});

export { styles };