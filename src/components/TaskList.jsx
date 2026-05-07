import TaskItem from "./TaskItem";
// import EditTaskForm from "./EditTaskForm";

const TaskList = ({ tasks, showOnlyIncomplete }) => {
  return (
    <ul>
      {tasks
      .filter((task) => !showOnlyIncomplete || !task.done)
      .map((task) => {
        return (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
