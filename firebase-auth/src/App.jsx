import { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";

function CustomRoutes() {
    const element = useRoutes([
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/profile",
            element: (
                <AuthPage>
                    <ProfilePage />
                </AuthPage>
            ),
        },
    ]);

    return element;
}

function App() {
    return (
        <Fragment>
            <CustomRoutes />
        </Fragment>
    );
}

export default App;
