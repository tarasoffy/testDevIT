import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  button: {
    marginTop: w(50),
    backgroundColor: Colors.YELLOW,
    color: Colors.BLACK,
    width: '100%',
    borderRadius: w(20),
    justifyContent: 'center',
    alignItems: 'center',
    height: w(62),
  },
  textInButton: {
    fontSize: w(18),
    fontWeight: '500'
  },
});

export { styles };