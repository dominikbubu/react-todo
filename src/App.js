import AddTodo from "./components/AddTodo"

export default function App() {
  return (
    <div className="bg-[#322C3A] h-screen text-white">
      <h1 className="text-center text-3xl font-bold p-6">
        React TODO App
      </h1>

      <AddTodo />
    </div>
  )
}