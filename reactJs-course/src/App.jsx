import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductList } from "./components/products/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React JS Concepts</h1>
      <ProductList />
    </div>
  );
}

export default App;
