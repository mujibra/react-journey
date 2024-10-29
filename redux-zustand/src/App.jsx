import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import CounterButton from "./components/CounterButton";
import CounterValue from "./components/CounterValue";

function App() {
  return (
    <>
      <h1>Redux Zustand</h1>
      <AddBlog />
      <BlogList />
      {/* <CounterButton /> */}
      {/* <CounterValue /> */}
    </>
  );
}

export default App;
