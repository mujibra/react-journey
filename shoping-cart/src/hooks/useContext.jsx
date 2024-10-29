import { createContext, useEffect, useState } from "react";

export const ShoppingCardContext = createContext(null);

import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    function handleAddCartItems(data) {
        let copyExistingCart = [...cartItems];
        const findItems = copyExistingCart.findIndex((item) => item.id === data.id);

        if (findItems === -1) {
            copyExistingCart.push({
                ...data,
                quantity: 1,
                totalPrice: data?.price,
            });
        } else {
            copyExistingCart[findItems] = {
                ...copyExistingCart[findItems],
                quantity: copyExistingCart[findItems].quantity + 1,
                totalPrice: (copyExistingCart[findItems].quantity + 1) * copyExistingCart[findItems].price,
            };
        }

        localStorage.setItem("cardItems", JSON.stringify(copyExistingCart));
        setCartItems(copyExistingCart);

        navigate("/card-list");
    }

    async function fetchProducts() {
        setLoading(true);
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();

        if (result && result?.products) {
            setProductsList(result?.products);
            setLoading(false);
        } else {
            setProductsList([]);
            setLoading(false);
        }
    }

    async function fetchProductDetails(id) {
        try {
            setLoading(true);
            const apiResponse = await fetch(`https://dummyjson.com/product/${id}`);
            const result = await apiResponse.json();

            if (result) {
                setLoading(false);
                setProductDetails(result);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    function handleRemoveCartItems(data, isRemove) {
        let copyExistingCart = [...cartItems];
        const findItems = copyExistingCart.findIndex((item) => item.id === data.id);
        let quantity = copyExistingCart[findItems].quantity;

        if (isRemove) {
            copyExistingCart.splice(findItems, 1);
        } else {
            copyExistingCart[findItems] = {
                ...copyExistingCart[findItems],
                quantity: quantity - 1,
                totalPrice: (quantity - 1) * copyExistingCart[findItems].price,
            };
        }

        localStorage.setItem("cardItems", JSON.stringify(copyExistingCart));
        setCartItems(copyExistingCart);
    }

    useEffect(() => {
        fetchProducts();
        setCartItems(JSON.parse(localStorage.getItem("cardItems")));
    }, []);

    const data = {
        productsList,
        loading,
        productDetails,
        setProductDetails,
        setLoading,
        handleAddCartItems,
        fetchProductDetails,
        cartItems,
        handleRemoveCartItems,
    };

    return <ShoppingCardContext.Provider value={data}>{children}</ShoppingCardContext.Provider>;
}
