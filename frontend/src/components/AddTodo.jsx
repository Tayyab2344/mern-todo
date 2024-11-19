import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="What do you need to do?"
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 w-60 h-12 px-4  "
      />
      <button
        className="w-20 h-12 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
