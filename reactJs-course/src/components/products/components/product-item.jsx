function ButtonComponent() {
  return <button>Click</button>;
}

export const ProductItem = () => {
  return (
    <div>
      <p>Product 1</p>
      <ButtonComponent />
    </div>
  );
};
