import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./todo-item/todo-item";
import TodoDetails from "./todo-item/todo-details";
import { Skeleton } from "@mui/material";

function App() {
    const [loading, setLoading] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [todoDetails, setTodoDetails] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

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

    async function fetchListDetail(id) {
        try {
            const apiResponse = await fetch(`https://dummyjson.com/todos/${id}`);
            const details = await apiResponse.json();

            console.log(details);
            if (details) {
                setTodoDetails(details);
                setOpenDialog(true);
            } else {
                setTodoDetails(null);
                setOpenDialog(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(error);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    if (loading) return <Skeleton variant="rectangular" width={650} height={650} />;

    return (
        <div className={classes.mainWrapper}>
            <h1 className={classes.headerTitle}>To Do List Material UI</h1>
            <div className={classes.todoListWrapper}>
                {todoList && todoList.length > 0 ? todoList.map((todoItem) => <TodoItem fetchListDetail={fetchListDetail} todo={todoItem} />) : null}
            </div>
            <TodoDetails setOpenDialog={setOpenDialog} openDialog={openDialog} setTodoDetails={setTodoDetails} todoDetails={todoDetails} />
        </div>
    );
}

export default App;
