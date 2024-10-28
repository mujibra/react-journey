import { useParams } from "react-router-dom";

export default function RecipeDetailsPage() {
    const params = useParams();

    const { id } = params;

    return (
        <div>
            <h3>Recipe Details of Recipe item {id}</h3>
        </div>
    );
}
