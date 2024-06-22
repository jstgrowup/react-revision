import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};
import "./sign-up-form.component.scss";
import Button from "../button/button.component";
const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("Password do not match");
      return;
    }
    try {
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user , email already used");
      } else {
        console.log("error:", error);
      }
      return;
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Signin with your email and password</span>
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            label={"Email"}
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label={"Password"}
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
