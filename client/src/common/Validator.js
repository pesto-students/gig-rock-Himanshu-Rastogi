import * as yup from "yup";
import "yup-phone";

export const authValidationSchema = yup.object().shape({
  accountType: yup
    .boolean()
    .label("AccountType")
    .required()
    .test("AccountType", "Account Type is a required field", (value) => {
      console.log(value);
    }),
  email: yup
    .string()
    .label("Email")
    .email()
    .required()
    .matches(/@[^.]*\./, "Email must be a valid email"),
  password: yup
    .string()
    .label("Password")
    .required()
    .min(8, "Maximum password length should be 8 characters"),
  fullName: yup
    .string()
    .label("Full Name")
    .required()
    .min(1, "Provide valid full name"),
  mobNumber: yup
    .string()
    .label("Mobile Number")
    .required()
    .matches(/^[6-9]\d{9}$/, "Not a valid mobile number"),
});
