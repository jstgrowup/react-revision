import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};
import "./sign-in-form.component.scss";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
const SignInForm = () => {
  const { setcurrentUser } = useContext(UserContext);
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setcurrentUser(user);
    await createUserDocumentFromAuth(user);
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
      setcurrentUser(user);
      resetFormFields();
    } catch (error) {
      console.log("error:", error);
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
      <div className="sign-in-container">
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
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType={"google"}
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
