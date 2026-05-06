import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return(
    <div style={{
      padding: "20px",
      fontFamily: "Arial",
      maxWidth: "800px",
      margin: "auto",
    }}>
      <h2 style={{textAlign: "center"}}>TO-DO</h2>
      <TaskForm />
      <TaskControl />
      <TaskList />
    </div>
  )
}

export default App;