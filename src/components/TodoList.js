import { useEffect } from "react"
import { TiDelete } from "react-icons/ti";

export default function TodoList(props) {
    let todos = props.todos
    useEffect(() => {
        console.log('TodoList rendered')
        console.log(todos)
    }, [todos])

    return (
        <div>
            <ul className="ml-auto mr-auto p-2 w-96 h-52 overflow-y-scroll scrollbar text-center text-white bg-gray-800 border-2 border-gray-600">
                {todos.map(todo => {
                    return (
                        <div className="flex justify-center" key={todo.id}>
                            <li
                            onClick={() => {
                                props.completedTodo(todo.id)
                            }}
                            className={`${todo.completed ? "line-through" : ""} p-2 w-96 text-center text-white bg-gray-800 border-2 border-gray-600`}>
                            {todo.title}
                            </li>
                            <button className="ml-3 text-red-600"
                            onClick={() => {
                                todos = props.deleteTodo(todo.id)
                                console.log(todos)
                            }}
                            >
                            <TiDelete />
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}