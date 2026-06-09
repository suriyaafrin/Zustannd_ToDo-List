import TodoInput from "./todoInput";
import TodoList from "./todoList";

function App(){
  return(
    <div className="min-h-screen bg-gray-50 flex item-start justify-center pt-16 px-4 ">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-medium mb-1">My Tasks</h1>
        <p className="text-sm text-gray-400 mb-6">Powered by Zustan</p>
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  )
}
export default App;