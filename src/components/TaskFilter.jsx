import React from "react";

const TaskFilter = ({ currrentFilter, onFilterChange, taskCounts }) => {
  return (
    <div className="flex justify-between flex-wrap gap-3 mb-6">
      <button
        onClick={() => {
          onFilterChange("all");
        }}
        className={`px-4 py-1 rounded-full text-sm font-medium border transition ${currrentFilter === "all" ? "bg-blue-600 text-white" : " bg-white text-gray-600 hover:bg-gray-100"}`}
      >
        All {taskCounts.all}
      </button>
      <button
        onClick={() => {
          onFilterChange("completed");
        }}
        className={`px-4 py-1 rounded-full text-sm font-medium border transition ${currrentFilter === "completed" ? "bg-blue-600 text-white" : " bg-white text-gray-600 hover:bg-gray-100"}`}
      >
        
        Completed {taskCounts.completed}
      </button>
      <button
        onClick={() => {
          onFilterChange("pending");
        }}
        className={`px-4 py-1 rounded-full text-sm font-medium border transition ${
          currrentFilter === "pending"
            ? "bg-blue-600 text-white"
            : " bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        Pending{taskCounts.pending}
      </button>
    </div>
  );
};

export default TaskFilter;
