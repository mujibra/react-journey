import { useContext } from "react";
import { AuthContext } from "../hooks/auth";
import { Navigate } from "react-router-dom";

export default function AuthPage({ children }) {
    const { user } = useContext(AuthContext);
    console.log(user);

    if (user) return children;
    return <Navigate to={"/login"} />;
}
