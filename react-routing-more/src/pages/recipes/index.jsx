import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

export default function RecipeList() {
    const location = useLocation();

    const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
    const windowSize = useWindowResize();

    if (loading) return <h1>Cooking something good!</h1>;

    return (
        <div>
            <h3>Recipe List</h3>
            <h3>
                Current width is {windowSize.width} and current height is {windowSize.height}
            </h3>
            <ul>
                {data?.recipes?.length > 0
                    ? data?.recipes.map((recipe) => (
                          <div>
                              <img src={recipe.image} />
                              <label>{recipe?.name}</label>
                          </div>
                      ))
                    : null}
            </ul>
        </div>
    );
}
