import React, { memo, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  Alert,
} from "react-native";
import { styles } from "./SignUp.styles";
import LogoComponent from "../../components/Logo";
import TitlePageComponent from "../../components/TitlePage";
import InputComponent from "../../components/Input";
import CustomButtonComponent from "../../components/CustomButtonComponent";
import TextQuestionComponent from "../../components/TextQuestion";
import { Formik } from "formik";
import SelectedComponent from "../../components/Selected";
import TitleInputTextComponent from "../../components/TitleInputText";
import { w } from "../../styles/scale";
import { createAccountValidationSchema } from "../../ValidationSchemas";
import { inputPropsCreateAccount } from "../../inputProps";
import { getUserByEmail, insertUser} from "../../db/database";
import { useNavigation } from "@react-navigation/native";

const telephoneСodes = ["+1", "+2", "+3", "+4"];

const sumPaddingScreen = 64;
const marginLeftInput = 25;
const widthSelectComponent = 70;

const SignUpScreenFun = () => {
  const navigation = useNavigation();

  const dimension = useWindowDimensions();

  const confirmNumberFields = useRef([]);

  const focusNextInput = (index) => {
    if (index < confirmNumberFields.current.length - 1) {
      confirmNumberFields.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (index > 0) {
      confirmNumberFields.current[index - 1].focus();
    }
  };

  return (
    <Formik
      initialValues={{
        phone: "",
        confirmNumberField1: "",
        confirmNumberField2: "",
        confirmNumberField3: "",
        confirmNumberField4: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validateOnMount={true}
      onSubmit={async (values) => {
        const existingUser = await getUserByEmail(values.email);
        if (existingUser) {
          Alert.alert("User with this email already exists");
          return;
        }

        const user = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        };

        try {
          await insertUser(user);
          Alert.alert('registration successful')
          navigation.replace("SignIn")
        } catch (error) {
          Alert.alert('Error registration');
        }
      }}
      validationSchema={createAccountValidationSchema}
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
              <TitlePageComponent title="Sign Up To Woorkroom" />
              <View style={styles.content}>
                <TitleInputTextComponent title="Phone Number" />

                <View style={styles.wrapperPhoneInput}>
                  <SelectedComponent data={telephoneСodes} />
                  <InputComponent
                    inputMode="numeric"
                    text={values.phone}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    password={false}
                    stylesInput={styles.inputPhoneStyles}
                    width={
                      dimension.width -
                      w(sumPaddingScreen) -
                      w(marginLeftInput) -
                      w(widthSelectComponent)
                    }
                    borderlessError={
                      errors.phone &&
                      touched.phone && (
                        <Text style={styles.errorTextStylePositionAbsolute}>
                          {errors.phone}
                        </Text>
                      )
                    }
                  />
                </View>

                <TitleInputTextComponent title="Code" />

                <View style={styles.confirmPhoneNumberWrapper}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <InputComponent
                      key={index}
                      ref={(ref) => (confirmNumberFields.current[index] = ref)}
                      inputMode="numeric"
                      text={values[`confirmNumberField${index + 1}`]}
                      onChangeText={handleChange(
                        `confirmNumberField${index + 1}`
                      )}
                      onBlur={handleBlur(`confirmNumberField${index + 1}`)}
                      password={false}
                      stylesInput={styles.inputConfirmPhone}
                      width={w(48)}
                      maxLength={1}
                      focusNextInput={() => focusNextInput(index)}
                      focusPreviousInput={() => focusPreviousInput(index)}
                    />
                  ))}
                </View>

                {inputPropsCreateAccount.map((inputProps, index) => (
                  <React.Fragment key={index}>
                    <InputComponent
                      text={values[inputProps.name]}
                      onChangeText={handleChange(inputProps.name)}
                      onBlur={handleBlur(inputProps.name)}
                      inputMode={inputProps.inputMode}
                      password={inputProps.password}
                      title={inputProps.title}
                      errors={
                        errors[inputProps.name] &&
                        touched[inputProps.name] && (
                          <Text style={styles.errorTextStyle}>
                            {errors[inputProps.name]}
                          </Text>
                        )
                      }
                    />
                  </React.Fragment>
                ))}
                <CustomButtonComponent onPress={handleSubmit} title="Next" />
              </View>
              <TextQuestionComponent
                questionText="Have Account?"
                titleButton="Log In"
                nameScreen="SignIn"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export const SignUpScreen = memo(SignUpScreenFun);
