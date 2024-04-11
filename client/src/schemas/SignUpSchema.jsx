import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  mobile: yup
    .number()
    .typeError("Mobile must be a number")
    .min(10)
    .required("Mobile Number is required"),
  password: yup.string().min(6).required("Password is required"),
  bussinessType: yup
    .string()
    .oneOf(["Builder", "Jeweller"], "Select any one")
    .required("Bussiness Type is required"),
});
