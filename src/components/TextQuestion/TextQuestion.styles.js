import { StyleSheet } from "react-native";
import { w } from '../../styles/scale'
import { Colors  } from "../../styles/colors";

const styles = StyleSheet.create({
  textQuestion: {
    color: Colors.GRAY,
    fontSize: w(14),
    fontWeight: "400",
  },
  
  textQuestionWrapper: {
    marginTop: w(35),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: w(32)
  }, 
  textCreateAccount: {
    fontSize: w(14),
    fontWeight: '500',
    color: Colors.YELLOW
  }
});

export { styles };