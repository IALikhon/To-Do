import { useState } from "react";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy groceries",
      priority: 1,
      done: true,
    },
    {
      id: 2,
      text: "Have a walk",
      priority: 2,
      done: false,
    },
    {
      id: 3,
      text: "Read a book",
      priority: 3,
      done: false,
    },
  ]);

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = ({ taskId, editText, editPriority }) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, text: editText, priority: editPriority }
        : task,
    );
    setTasks(updatedTasks)
  };

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );
    setTasks(updatedTasks);
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);

    setTasks(sortedTasks);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>TO-DO</h2>
      <TaskForm addTask={addTask} />
      <TaskControl
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />
      <TaskList
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
