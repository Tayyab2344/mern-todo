import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import axios from "axios";

const Home = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => settodos(result.data.todos))  
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Todo List
      </h1>
      <AddTodo settodos={settodos} />
      <div className="mt-6">
        {todos.length === 0 ? (
          <h2 className="text-center text-gray-500">No Todos yet!</h2>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}  // Ensure to use a unique identifier (e.g., _id)
              className="bg-blue-100 text-blue-900 rounded px-4 py-2 my-2 text-center shadow-sm"
            >
              {todo.task}  
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
