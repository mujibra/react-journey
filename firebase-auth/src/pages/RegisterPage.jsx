import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { AuthContext } from "../hooks/auth";
import { registerForm } from "../config";
import { updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const { registerData, setRegisterData, registerSubmit, user } = useContext(AuthContext);
    console.log(registerData);

    const navigate = useNavigate();

    function registerFormSubmit(e) {
        e.preventDefault();
        registerSubmit()
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

    console.log(user);

    if (user) return <Navigate to={"/profile"} />;

    return (
        <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5">
                <h3>Welcome Back</h3>
                <p>Register Page</p>
                <CommonForm
                    formControls={registerForm}
                    formData={registerData}
                    setFormData={setRegisterData}
                    onSubmit={registerFormSubmit}
                    buttonText={"Save"}
                />
            </div>
        </div>
    );
}
