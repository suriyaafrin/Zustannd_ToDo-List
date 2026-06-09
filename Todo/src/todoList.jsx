import TodoItem from "./todoItem";
import useTodoStore from "./todoStore";

function TodoList (){
    const todos = useTodoStore((state)=>state.todos);
    if(todos.length === 0)
        return <p className="text-center text-gray-400 text-sm py-8">No task yet.Add one above!</p>;
    return(
        <div className="flex flex-col gap-2">
            {todos.map((todo)=>(
                <TodoItem key ={todo.id} todo={todo}/>
            ))}
        </div>
    )
}
export default TodoList;