import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in user reducer`);
  }
};
export const UserProvider = ({ children }) => {
  // const [currentUser, setcurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setcurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  const value = { currentUser, setcurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      return setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
/*

*/
