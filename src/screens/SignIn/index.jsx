import React, { memo, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { styles } from "./SignIn.styles";
import LogoComponent from "../../components/Logo";
import TitlePageComponent from "../../components/TitlePage";
import InputComponent from "../../components/Input";
import CustomButtonComponent from "../../components/CustomButtonComponent";
import TextQuestionComponent from "../../components/TextQuestion";
import { Formik } from "formik";
import { loginValidationSchema } from "../../ValidationSchemas";
import { inputPropsSignInScreen } from "../../inputProps";
import { getUserByEmail } from "../../db/database";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreenFun = () => {

  const navigation = useNavigation()

  const goToProfile = async(email) => {
    const user = await getUserByEmail(email);
    navigation.replace("Edit Profile", {user})
  }

  const checkAuthorized = async() => {
      try {
        const mail = await AsyncStorage.getItem('mail')
        if(mail !== "null") {goToProfile(mail)}
      } catch(e) {
      }
  }

  useEffect(() => {
    checkAuthorized()
  },[])

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={async (values) => {
        const user = await getUserByEmail(values.email);
        if (user && user.password === values.password) {
          navigation.replace("Edit Profile", {user})
        } else {
          Alert.alert("Invalid email or password");
        }
      }}
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets={true}
          >
            <View style={styles.container}>
              <StatusBar style="auto" />
              <LogoComponent />
              <TitlePageComponent title="Log In To Woorkroom" />
              <View style={styles.content}>
                {inputPropsSignInScreen.map((inputProps, index) => (
                  <InputComponent
                    key={index}
                    title={inputProps.title}
                    text={values[inputProps.name]}
                    onChangeText={handleChange(inputProps.name)}
                    inputMode={inputProps.inputMode}
                    onBlur={handleBlur(inputProps.name)}
                    password={inputProps.password}
                    errors={
                      errors[inputProps.name] &&
                      touched[inputProps.name] && (
                        <Text style={styles.errorTextStyle}>
                          {errors[inputProps.name]}
                        </Text>
                      )
                    }
                  />
                ))}

                <TouchableOpacity style={styles.wrapperForgotPassword}>
                  <Text style={styles.textQuestion}>Forgot password?</Text>
                </TouchableOpacity>

                <CustomButtonComponent onPress={handleSubmit} title="Log In" />
              </View>
              <TextQuestionComponent
                questionText="New User?"
                titleButton="Create Account"
                nameScreen="SignUp"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export const SignInScreen = memo(SignInScreenFun);
