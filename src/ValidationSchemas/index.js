import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please Enter your email"),
  password: Yup.string()
    .min(
      4,
      ({ min }) =>
        `Must be at least ${min} characters. Contain capital letter and numbers`
    )
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})/,
      "Must be at least One Uppercase, One Lowercase and One Number"
    ),
});

export const createAccountValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Please Enter your phone"),
  confirmNumberFiel1: Yup.string(),
  confirmNumberField2: Yup.string(),
  confirmNumberField3: Yup.string(),
  confirmNumberField4: Yup.string(),
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please Enter valid name")
    .max(40)
    .required("Please Enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please Enter your email"),
  password: Yup.string()
    .min(
      4,
      ({ min }) =>
        `Must be at least ${min} characters. Contain capital letter and numbers`
    )
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})/,
      "Must be at least One Uppercase, One Lowercase and One Number"
    ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const editProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please Enter valid name")
    .max(40)
    .required("Please Enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please Enter your email"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Please Enter your phone"),
  position: Yup.string().max(40),
  skype: Yup.string().max(40)
});
