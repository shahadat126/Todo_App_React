import React from "react";
import TaskItem from "./TaskItem";
import { Clipboard } from "lucide-react";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <div className="bg-white rounded shadow p-8 text-center">
              <Clipboard className="mx-auto h-12 w-12 text-gray-400"/>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No Text yet</h3>
              <p className="mt-1 text-gray-500">Add a New Task to Get Started</p>
    
          </div>;
  }

  return (
    <div className="space-y-1">
      {tasks.map((task) => {
        return(
          <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />)
      })}
    </div>
  );
};

export default TaskList;