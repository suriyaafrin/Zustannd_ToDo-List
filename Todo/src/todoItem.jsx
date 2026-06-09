import useTodoStore from "./todoStore";

function TodoItem({todo}){
    const toggleTodo = useTodoStore((state)=>state.toggleTodo);
    const deleteTodo = useTodoStore((state)=>state.deleteTodo);

    return(
        <div className="flex items-center justify-between border border-gray-100 rounded-lg px-4 py-3 bg-white">
            <p onClick={()=>toggleTodo(todo.id)}
            className={`flex-1 text-sm cursor-pointer ${
                todo.completed? "line-through text-gray-400":"text-gray-700"
            }`}>
                {todo.text}
            </p>
            <button onClick={()=>deleteTodo(todo.id)}
                className="text-gray-300 hover:text-red-500 text-sm ml-4">
                    ✕

            </button>
        </div>
    )
}
export default TodoItem;