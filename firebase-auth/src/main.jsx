import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthState from "./hooks/auth.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthState>
            <App />
        </AuthState>
    </BrowserRouter>
);
