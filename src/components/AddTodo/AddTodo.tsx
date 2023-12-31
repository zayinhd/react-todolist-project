import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { Input } from "../Input/Input";
import { useTodo } from "../../context/useTodo";
import "./styles.css";

const AddTodo = () => {
    const [input, setInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const { addTodo } = useTodo();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const handleSubmission = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== "") {
            addTodo(input);
            setInput("");
            toast.success("Todo added successfully!");
        } else {
            toast.error("Todo field cannot be empty!");
        }
    };

    return (
        <form onSubmit={handleSubmission}>
            <div className="form">
                <Input
                    value={input}
                    ref={inputRef}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter something..."
                    className="input-style"
                />
                <button type="submit" className="submit-style">
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
