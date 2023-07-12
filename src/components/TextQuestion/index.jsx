import React from 'react'
import { styles } from './TextQuestion.styles'
import { View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const TextQuestionComponent = ({questionText, titleButton, nameScreen}) => {

  const navigation = useNavigation();

  return (
     <View style={styles.textQuestionWrapper}>
          <Text style={styles.textQuestion}>{questionText}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(nameScreen)}
          >
              <Text style={styles.textCreateAccount}> {titleButton}</Text>
            </TouchableOpacity>
        </View>
  )
}

export default TextQuestionComponent