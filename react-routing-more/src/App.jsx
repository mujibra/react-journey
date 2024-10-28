import { Link, useNavigate, useRoutes } from "react-router-dom";
import CommentsList from "./pages/comments";
import RecipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import ReactQuery from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe",
          element: <RecipeList />,
        },
        {
          path: "comments",
          element: <CommentsList />,
        },
        {
          path: "recipe/:id",
          element: <RecipeDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQuery />,
    },
  ]);

  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* <div>
                <h1>React router</h1>
                <button onClick={() => navigate("/home/recipe")}>Navigate to Recipe</button>
                <button onClick={() => navigate("/home/comments")}>Navigate to Comment</button>
            </div>
            <Link to={"/recipe"}>Recipe Another Way</Link> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
