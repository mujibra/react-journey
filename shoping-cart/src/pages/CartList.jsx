import { useContext } from "react";
import { ShoppingCardContext } from "../hooks/useContext";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";

export default function CartList() {
    const { cartItems } = useContext(ShoppingCardContext);

    const navigate = useNavigate();

    return (
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center">My Cart Page</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {cartItems?.length > 0 ? (
                        cartItems.map((item) => <CartCard key={item.id} cartItems={item} />)
                    ) : (
                        <div>Theres no something good in here, explore more!</div>
                    )}
                </div>
                <div className="bg-gray-100 rounded-sm p-4 h-max">
                    <div className="text-xl font-extrabold text-gray-950 border-gray-300 pb-2">Order Summary</div>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">
                            Total <span>$ {cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</span>
                        </p>
                    </ul>
                    <div className="mt-5 flex gap-4">
                        <button className="text-sm px-4 py-3 bg-black text-white font-extrabold rounded-md">Checkout</button>
                        <button
                            onClick={() => navigate("/product-list")}
                            className="text-sm px-4 py-3 bg-red-800 text-white font-extrabold rounded-md"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
