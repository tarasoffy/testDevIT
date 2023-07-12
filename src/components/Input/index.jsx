import React, {useState} from 'react'
import { styles } from './Input.styles'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import EyeOpen from "../../assets/EyeOpen.svg";
import EyeInvisible from "../../assets/EyeInvisible.svg"
import { w } from "../../styles/scale";
import { Colors } from "../../styles/colors";

const InputComponent = React.forwardRef(
  ({title, 
    text, 
    onChangeText, 
    inputMode, 
    onBlur, 
    password, 
    stylesInput, 
    width, 
    maxLength, 
    focusNextInput, 
    focusPreviousInput, 
    errors,
    borderlessError
  }, 
    ref) => {

  const [passwordVisible, setPasswordVisible] = useState(password);

  const [borderColorInput, setBorderColorInput] = useState(Colors.LIGHT_GRAY)

  const handleTextChange = (inputText) => {
    onChangeText(inputText);
    if (typeof focusNextInput === 'function' && inputText !== '') {
      focusNextInput();
    }
  };

  const handleTextDelete = (inputText) => {
    if (inputText === '') {
      if (typeof focusPreviousInput === 'function') {
        focusPreviousInput();
      }
    } else {
      onChangeText(inputText);
    }
  };

  const handleBlur = (event) => {
    setBorderColorInput(Colors.LIGHT_GRAY);
    if (onBlur) {
      onBlur(event.nativeEvent);
    }
  };

  return (
    <>
      <View style={styles.wrapperInput}>
      {title && <Text style={styles.titleInput}>{title}</Text>}
        <View style={styles.passwordSection}>
          <TextInput
              ref={ref}
              onFocus={() => setBorderColorInput(Colors.YELLOW)}
              onBlur={handleBlur}
              secureTextEntry={passwordVisible}
              inputMode={inputMode}
              style={[styles.input, stylesInput, {width: width? width: '100%', borderColor: borderColorInput}]}
              onChangeText={handleTextChange}
              value={text}
              maxLength={maxLength}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleTextDelete(text.slice(0, -1));
                }
              }}
            />
            {password && <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.eyeIconContainer}>
                {passwordVisible ? <EyeOpen width={w(24)} height={w(24)} /> :
                  <EyeInvisible width={w(24)} height={w(24)} />
                }
              </TouchableOpacity>}
        </View>
        {errors} 
    </View>
      {borderlessError}       
    </>
  )
});

export default InputComponent