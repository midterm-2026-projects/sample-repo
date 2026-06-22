import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (task) =>{
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Header/>
      <AddTaskForm onAddTask={onAddTask} />
      <TaskList tasks={tasks} />

    </>
  )
}

export default App
