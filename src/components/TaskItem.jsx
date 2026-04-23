import { CheckCircle } from "lucide-react";
import React from "react";
import { Circle } from "lucide-react";

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const formattedDate = new Date(task.created).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "asia/dhaka",
  });
  return (
    <div className= {`flex justify-between shrink-0 items-start bg-white rounded-md shadow-sm  p-4 border-l-4 ${task.completed ? "border-green-500 " : "border-gray-300 opacity-50"} transition-all hover:shadow `}>
      <div className="flex  items-start gap-3 flex-1">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="mt-1 shrink-0 transition-transform duration-200 hover:scale-110  focus:outline-none rounded mr-2"
          aria-label={ task.completed ? "Mark as incompleted" : "Mark as completed" }
        >
          {task.completed ? (<CheckCircle className="h-5 w-5 text-green-500"/>) : (<Circle className="h-5 w-5 text-gray-500"/>)}
        </button>
        <div className="flex-1">
            <h3 className={` text-base font-medium ${ task.completed ? "font-bold" : "text-gray-800"}`}>{task.title}
            </h3>
            <div className="flex shrink-0  flex-wrap gap-2 mt-2 text-xs text-gray-500">
              <span className="bg-gray-300 text-white-60 px-2 py-0.5 rounded-full border-gray-500 box-border min-w-16 text-center">{task.category}
              </span>

              <span className={ `py-0.5 px-2 rounded-full bg-gray-500 text-blue-400  border-gray-500 box-border min-w-16  text-center`}>{task.priority}</span>

              <span className="bg-gray-800 px-2 py-0.5 text-gray-500 rounded-full">{formattedDate }</span>

            </div>
        </div>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-800"
        >
          Delete
        </button>
      </div>




      {/* <div className="bg-white shadow p-4 rounded mb-4">
       

        <p>Status: {task.completed ? "Completed ✅" : "Pending ⏳"}</p>
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5  rounded-full">
          {formattedDate}


        </span>

        

        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default TaskItem;
