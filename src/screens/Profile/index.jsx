import React, { memo, useEffect, useState, useRef, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { styles } from "./Profile.style";
import Edit from "../../assets/Edit.svg";
import InputComponent from "../../components/Input";
import CustomButtonComponent from "../../components/CustomButtonComponent";
import { Formik } from "formik";
import { editProfileValidationSchema } from "../../ValidationSchemas";
import { inputPropsEditProfile } from "../../inputProps";
import { w } from "../../styles/scale";
import { updateUser } from "../../db/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
import { Context } from "../../../App";

const ProfileScreenFun = ({ route }) => {

  const { user } = route.params;

  const { data, updateData } = useContext(Context);

  const currentEmail = useRef(user.email).current

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [position, setPosition] = useState(user.position);
  const [skype, setSkype] = useState(user.skype);

  const [image, setImage] = useState(user.uriPhoto);

  const changeUserData = async (data) => {

    updateData(data.uriPhoto)

        try {
          const jsonData = JSON.stringify(data)
          await AsyncStorage.setItem('dataUser', jsonData)
        } catch(e) {
        }
  }

  // useEffect(() => {
  //   setImage(user.uriPhoto)
  // },[user.uriPhoto])

  useEffect(() => {
    changeUserData({
        mail: user.email,
        uriPhoto: user.uriPhoto ? user.uriPhoto: null
    });
    
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      changeUserData({
        mail: user.email,
        uriPhoto: result.assets[0].uri
    });
    }
  };

  return (
    <Formik
      initialValues={{
        name: name,
        email: email,
        phone: phone,
        position: position ? position : "",
        skype: skype ? skype : "",
      }}
      validateOnMount={true}
      onSubmit={async (values) => {
        const user = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          position: values.position,
          skype: values.skype,
          currentEmail: currentEmail
        };

        setName(values.name);
        setEmail(values.email);
        setPhone(values.phone);
        setPosition(values.position);
        setSkype(values.skype);

        changeUserData({
            mail: values.email,
            uriPhoto: image
        });

        try {
            await updateUser(user);
            Alert.alert("Profile updated successfully");
          } catch (error) {
            Alert.alert("An error occurred while updating the profile");
          }
      }}
      validationSchema={editProfileValidationSchema}
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

              <View style={styles.wrapperPhotoEtitProfile}>
              {image ?<Image source={{ uri: image }} style={styles.photoEditProfile} /> :
                <Image style={styles.photoEditProfile} source={require("../../assets/Photo.png")}
              />
              }
                <TouchableOpacity
                    onPress={pickImage} 
                    style={styles.buttonEditProfile}>
                    <Edit witdth={w(24)} height={w(24)} />
                </TouchableOpacity>
              </View>

              <View style={styles.infoUser}>
                <Text style={styles.infoUserName}>{name}</Text>
                {user.position ? (
                  <Text style={styles.infoUserPosition}>{position}</Text>
                ) : (
                  <Text style={styles.infoUserPosition}>Position</Text>
                )}
              </View>

              <View style={styles.content}>
                {inputPropsEditProfile.map((inputProps, index) => (
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
                <CustomButtonComponent
                  onPress={handleSubmit}
                  title="Save"
                  margin={styles.marginBottomEditPrifile}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export const ProfileScreen = memo(ProfileScreenFun);
