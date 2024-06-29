import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ButtonsContainer,
  SignInContainer,
  SignInHeader,
} from "./sign-in-form.styles";

const SignInForm = () => {
  const signInWithGoogle = async () => {
    return await signInWithGooglePopup();
  };
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

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("incorrect password");
          break;
        case "auth/invalid-credential":
          alert("incorrect password");
          break;
        default:
          break;
      }
    }
  };
  return (
    <>
      <SignInContainer>
        <SignInHeader>Already have an account?</SignInHeader>
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
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
