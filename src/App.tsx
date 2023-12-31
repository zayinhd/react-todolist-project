import React from "react";
import "./styles/App.css";
import { Toaster } from "react-hot-toast";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
    return (
        <div className="main">
            <Toaster position="bottom-center" />
            <h1>TODO LIST</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;
