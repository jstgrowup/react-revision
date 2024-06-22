import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  auth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     console.log("response:", response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <button onClick={logGoogleUser}>Signin with google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Signin with google redirecct
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
