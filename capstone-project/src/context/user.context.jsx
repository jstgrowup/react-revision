import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
// actual value i want to access
export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("user:", user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      return setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
