import { Fragment } from "react";
import { Routes, useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartList from "./pages/CartList";

function CustomRoutes() {
    const element = useRoutes([
        {
            path: "/product-list",
            element: <ProductList />,
        },
        {
            path: "/product-details/:id",
            element: <ProductDetails />,
        },
        {
            path: "/card-list",
            element: <CartList />,
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
