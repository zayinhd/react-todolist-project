import React from "react";
import { useTodo } from "../../context/useTodo";
import { SiStarship } from "react-icons/si";
import { TodoItem } from "../TodoItem/TodoItem";
import { motion } from "framer-motion";
import "./styles.css";

const TodoList = () => {
    const { todos } = useTodo();

    if (!todos.length) {
        return (
            <div>
                <h1>
                    <SiStarship />
                    You have nothing to do!
                </h1>
            </div>
        );
    }
    return (
        <motion.ul className="todo">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </motion.ul>
    );
};

export default TodoList;
