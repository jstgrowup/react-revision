import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

import Button from "../button/button.component";
import { SignUpContainer, SignupHeader } from "./sign-up-form.styles.jsx";

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
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
      const { user } = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.confirmPassword
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user , email already used");
      } else {
      }
      return;
    }
  };
  return (
    <>
      <SignUpContainer>
        <SignupHeader>Dont have an account?</SignupHeader>
        <span>Signup with your email and password</span>
        <form action="" onSubmit={handleSubmit}>
          <FormInput
            label={"Display Name"}
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

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

          <FormInput
            label={"Confirm Password"}
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </SignUpContainer>
    </>
  );
};

export default SignUpForm;
