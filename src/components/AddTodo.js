import { useState } from 'react'
import TodoList from './TodoList'
 
export default function AddTodo() {
    const [todo, setTodo] = useState({
        id: '', 
        title: '',
        completed: false
    })
    const [todos, setTodos] = useState([])

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completedTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }
        ))
    }

    return (
        <div className=''>
            <div className='flex justify-center p-10'>
                <input type="text" 
                placeholder='Press enter to add a todo'
                className='p-2 w-80 text-center text-white bg-gray-800 border-2 border-gray-600 focus:outline-none'
                onChange={(e) => {
                    setTodo({
                        id: Date.now(),
                        title: e.target.value,
                        completed: false
                    })
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        if (todo.title) {
                            setTodos([...todos, todo])
                            setTodo({
                                id: '', 
                                title: '',
                                completed: false
                            })
                            e.target.value = ''
                        } else {
                            alert('Please enter a todo')
                        }
                    }
                }}
                />
            </div>

            <div>
                <TodoList todos={todos} deleteTodo={deleteTodo} completedTodo={completedTodo}/>
            </div>

        </div>
    )
}