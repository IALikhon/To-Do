import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import { useState } from "react";

const TaskList = ({
  tasks,
  showOnlyIncomplete,
  toggleTaskDone,
  removeTask,
  updateTask,
}) => {
  const [editedTaskId, setEditedTaskId] = useState(null);

  return (
    <ul>
      {tasks
        .filter((task) => !showOnlyIncomplete || !task.done)
        .map((task) => {
          return (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                gap: "10px",
              }}
            >
              {editedTaskId === task.id ? (
                <EditTaskForm
                  task={task}
                  setEditedTaskId={setEditedTaskId}
                  updateTask={updateTask}
                />
              ) : (
                <TaskItem
                  task={task}
                  toggleTaskDone={toggleTaskDone}
                  removeTask={removeTask}
                  setEditedTaskId={setEditedTaskId}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default TaskList;
