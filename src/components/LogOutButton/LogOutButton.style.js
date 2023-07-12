import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors  } from "../../styles/colors";

const styles = StyleSheet.create({
    buttonStyle: {
        color: Colors.YELLOW,
        fontSize: 16,
        fontWeight: '500',
        marginRight: w(32)
    }
});

export { styles };