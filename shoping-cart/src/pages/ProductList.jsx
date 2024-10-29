import { useContext } from "react";
import { ShoppingCardContext } from "../hooks/useContext";
import ProductListCard from "../components/ProductListCard";

export default function ProductList() {
    const { productsList, loading } = useContext(ShoppingCardContext);

    if (loading) return <h1>On Fetching</h1>;

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 flex justify-center">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">Our Product</h2>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
                    {productsList && productsList?.length > 0 ? (
                        productsList.map((product) => <ProductListCard key={product.id} product={product} />)
                    ) : (
                        <h3>No Product Found</h3>
                    )}
                </div>
            </div>
        </section>
    );
}
