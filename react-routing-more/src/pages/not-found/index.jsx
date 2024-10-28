import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h3>This page doesn't exist</h3>
            <Link to={"/recipe"}>Go to recipe list</Link>
        </div>
    );
}
