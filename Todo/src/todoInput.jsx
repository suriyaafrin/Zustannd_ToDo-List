import { useState } from "react";
import useTodoStore from "./todoStore";

function TodoInput(){
    const [text,setText]=useState("");
    const addTodo = useTodoStore((state)=>state.addTodo);

    const handleAdd = () =>{
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return(
        <div className="flex gap-2 mb-6">
            <input
                value={text}
                onChange={(e)=>setText (e.target.value)}
                onKeyDown={(e)=>e.key === "Enter" && handleAdd()}
                placeholder="Add a new task..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                + Add
            </button>
        </div>
    )
}
export default TodoInput;
