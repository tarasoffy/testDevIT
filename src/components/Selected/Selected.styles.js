import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors  } from "../../styles/colors";

const styles = StyleSheet.create({
  
  selectNumberButtonStyle: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: w(1),
    borderRadius: w(15),
    width: w(70),
    height: w(48)
  },
  selectNumberButtonTextStyle: {
    fontSize: w(16),
    fontWeight: '500',
    color: Colors.GRAY
  },
});

export { styles };