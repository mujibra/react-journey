import { Fragment, useContext } from "react";
import { ShoppingCardContext } from "../hooks/useContext";

export default function CartCard({ cartItems }) {
    const { handleRemoveCartItems, handleAddCartItems } = useContext(ShoppingCardContext);

    return (
        <Fragment>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 rounded-sm p-1">
                        <img className="w-full h-full object-contain" src={cartItems?.thumbnail} />
                    </div>
                    <div>
                        <div className="text-base font-bold text-gray-900">{cartItems?.title}</div>
                        <button
                            onClick={() => handleRemoveCartItems(cartItems, true)}
                            className="mt-5 text-sm px-4 py-3 bg-red-600 text-white font-extrabold rounded-md"
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div className="ml-auto">
                    <h3 className="text-lg font-bold text-gray-900">${cartItems?.totalPrice.toFixed(2)}</h3>
                    <div className="mt-3">
                        <button
                            disabled={cartItems?.quantity === 1}
                            onClick={() => handleRemoveCartItems(cartItems, false)}
                            className="mr-2 px-[12px] py-1 rounded-md border border-[#000]"
                        >
                            -
                        </button>
                        <span className="mr-2 font-bold">{cartItems?.quantity}</span>
                        <button onClick={() => handleAddCartItems(cartItems)} className="px-[10px] py-1 rounded-md border border-[#000]">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500ray-" />
        </Fragment>
    );
}
