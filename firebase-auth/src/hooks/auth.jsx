import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
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

    useEffect(() => {
        const checkAuthUser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => checkAuthUser();
    }, []);

    const data = { registerData, setRegisterData, registerSubmit, user, loginData, setLoginData };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
