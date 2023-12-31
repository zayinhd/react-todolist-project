import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (!context) throw new Error("useTodo must be used with a TodoProvider");

    return context;
};
