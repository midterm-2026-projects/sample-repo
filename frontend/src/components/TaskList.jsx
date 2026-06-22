const TaskList = ({tasks}) =>{
    return(
        <>
           {tasks.length > 0 ? (
            <ul>
                {tasks.map((task) =>(
                    <li key={task}>{task}</li>
                ))}
            </ul>
           ):(
            <p>No tasks yet</p>
           )}
        </>
    )
}

export default TaskList;