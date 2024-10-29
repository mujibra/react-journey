import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const navigate = useNavigate;
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);

  function registerSubmit() {
    const { email, password } = registerData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginSubmit() {
    const { email, password } = loginData;
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handelLogout() {
    return signOut(auth), navigate("/login");
  }

  useEffect(() => {
    const checkAuthUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => checkAuthUser();
  }, []);

  const data = {
    registerData,
    setRegisterData,
    registerSubmit,
    user,
    loginData,
    setLoginData,
    loginSubmit,
    handelLogout,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
