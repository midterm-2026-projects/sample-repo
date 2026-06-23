import { useState } from "react";

const AddTaskForm = ({onAddTask}) => {
    const [task, setTask] = useState('');

    const handleClick = () =>{
        onAddTask(task);
        setTask('');
    }

    return(
        <>
            <label htmlFor="addTask">New Task</label>
            <input type="text" name="addTask" id="addTask" value={task} onChange={(e) => setTask(e.target.value)}/>  
            <button onClick={handleClick}>Create</button>

        </>
    )
}

export default AddTaskForm;