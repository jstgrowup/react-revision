import React from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.component.scss";
const Authentication = () => {
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
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Signin with google redirecct
      </button> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
