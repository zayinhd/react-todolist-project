import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../context/TodoContext";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import classNames from "classnames";

import { Input } from "../Input/Input";
import { useTodo } from "../../context/useTodo";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./styles.css";

export const TodoItem = (props: { todo: Todo }) => {
    const { todo } = props;

    const [editingTodoText, setEditingTodoText] = useState<string>("");
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

    const { deleteTodo, editTodo, updateTodoStatus } = useTodo();

    const editInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editingTodoId !== null && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [editingTodoId]);

    const handleEdit = (todoId: string, todoText: string) => {
        setEditingTodoId(todoId);
        setEditingTodoText(todoText);

        if (editInputRef.current) {
            editInputRef.current.focus();
        }
    };

    const handleUpdate = (todoId: string) => {
        if (editingTodoText.trim() !== "") {
            editTodo(todoId, editingTodoText);
            setEditingTodoId(null);
            setEditingTodoText("");
            toast.success("Todo updated successfully!");
        } else {
            toast.error("Todo field cannot be empty!");
        }
    };

    const handleDelete = (todoId: string) => {
        deleteTodo(todoId);
        toast.success("Todo deleted successfully!");
    };

    const handleStatusUpdate = (todoId: string) => {
        updateTodoStatus(todoId);
        toast.success("Todo status updated successfully!");
    };
    return (
        <motion.li
            layout
            key={todo.id}
            className={classNames("todo-item", todo.status === "completed")}
        >
            {editingTodoId === todo.id ? (
                <motion.div layout className="flex gap-2">
                    <Input
                        ref={editInputRef}
                        type="text"
                        value={editingTodoText}
                        onChange={(e) => setEditingTodoText(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(todo.id)}>
                        Update
                    </button>
                </motion.div>
            ) : (
                <div>
                    <motion.span
                        layout
                        style={{
                            width: "100%",
                            textAlign: "left",
                            textDecoration:
                                todo.status === "completed"
                                    ? "line-through"
                                    : "none",
                        }}
                    >
                        {todo.text}
                    </motion.span>
                    <div className="todo-options">
                        <button onClick={() => handleStatusUpdate(todo.id)}>
                            {todo.status === "undone" ? (
                                <span>
                                    <BsCheck2Square />
                                    Mark Completed
                                </span>
                            ) : (
                                <span>
                                    <TbRefresh />
                                    Mark Undone
                                </span>
                            )}
                        </button>
                        <div className="todo-options">
                            <button
                                onClick={() => handleEdit(todo.id, todo.text)}
                            >
                                <FaRegEdit />
                                Edit
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>
                                <RiDeleteBin7Line />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </motion.li>
    );
};
