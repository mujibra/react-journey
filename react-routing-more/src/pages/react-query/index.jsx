import { useQuery } from "@tanstack/react-query";
import { fetchListsProducts } from "./api";

export default function ReactQuery() {
  const { data, isLoading, productList } = useQuery({
    queryKey: ["productList"],
    queryFn: () => fetchListsProducts(),
  });

  if (isLoading) return <h1>Product is Loading</h1>;

  return (
    <div>
      <h1>React Query Page</h1>
      <ul>
        {productList?.length > 0 ? (
          productList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No Product Found</h3>
        )}
      </ul>
    </div>
  );
}
