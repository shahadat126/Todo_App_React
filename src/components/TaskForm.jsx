import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("High");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category: category,
      priority: priority,
      completed: false,
      created: new Date().toISOString(),
    };
    onAddTask(newTask);
    setTitle("");
    setCategory("Work");
    setPriority("High");
    setError("");
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 ">
        Add New Task Here
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-1 ml-1 font-bold text-xl">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block mb-1 ml-1 font-bold text-xl">
            Category
          </label>
          <select
            name=""
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="study">Study</option>
            <option value="health">Health</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority" className="block mb-1 ml-1 text-xl font-bold">
            Priority
          </label>
          <select
            name=""
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded "
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full md:auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
