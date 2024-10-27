import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./todo-item/todo-item";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchList() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      console.log(result);
      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
    }
  }

  useEffect(() => {
    fetchList();
  });

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>To Do List Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => <TodoItem todo={todoItem} />)
          : null}
      </div>
    </div>
  );
}

export default App;
