// import './index.css'
import "./App.css";
import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import TaskFilter from "./components/TaskFilter";

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // ✅ Add Task
  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // ✅ Toggle Complete (FIXED)
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>(
      task.id === id ? { ...task, completed: !task.completed } : task)
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // ✅ Delete Task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const filteredTask = tasks.filter((task)=>{
    if(filter === "completed") return task.completed;
    if(filter === "pending") return !task.completed;
    return true;

  })
  const taskCounts= {
    all: tasks.length,
    completed : tasks.filter((t)=> t.completed).length,
    pending: tasks.filter((t)=> !t.completed).length

  }

  // ✅ Load from localStorage
  useEffect(() => {
    const storeTasks = JSON.parse(localStorage.getItem("tasks")) || [];    
      setTasks(storeTasks)
    
  }, []);

  return (
    <div className="p-8">
      <AppHeader />

      {/* 👉 Input Form */}
      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter 
        currrentFilter={filter}
        onFilterChange={setFilter}
        taskCounts ={taskCounts}
      />

      {/* 👉 Output UI */}
      <TaskList
        tasks={filteredTask}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
