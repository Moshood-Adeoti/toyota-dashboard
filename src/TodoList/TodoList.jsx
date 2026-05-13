import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Buy groceries", "Do homework"]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div  className="bg-blue-900 py-[40px]">
      <div className="max-w-md mx-auto mt-16 p-6 bg-blue-100 rounded-2xl shadow-lg font-sans">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">My To-Do List</h1>

      {/* Input row */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Write a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add
        </button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700"
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-400 hover:text-red-600 text-xs font-medium ml-4 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Empty state */}
      {tasks.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-6">No tasks yet. Add one above!</p>
      )}

    </div>
    </div>
  );
}

export default TodoList;