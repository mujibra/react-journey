import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { loginForm } from "../config";
import { AuthContext } from "../hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { loginData, setLoginData, loginSubmit, user } = useContext(AuthContext);

    const navigate = useNavigate();

    function loginFormSubmit(e) {
        e.preventDefault();
        loginSubmit()
            .then((result) => {
                if (result.user) {
                    updateProfile(result.user, {
                        displayName: registerData.name,
                    });

                    navigate("/profile");
                }
            })
            .catch((error) => console.log(error));
    }

    // if (user) return <Navigate to={"/profile"} />;

    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome Back</h3>
                <p>Login Page</p>
                <CommonForm
                    formControls={loginForm}
                    formData={loginData}
                    setFormData={setLoginData}
                    onSubmit={loginFormSubmit}
                    buttonText={"Login"}
                />
            </div>
        </div>
    );
}
