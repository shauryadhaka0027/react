import TodoItem from "./TodoItem.jsx";


function TodoList({task,toggleStatus}){
    return(
        <>
        <table>
         <thead>
            <tr>
                <th>task</th>
                <th>Status</th>
            </tr>
         </thead>
         <tbody>
            {task.map((data)=>(
                <TodoItem key={data.id}  data1={data} toggleStatus={toggleStatus} />
            ))}
         </tbody>
        </table>
        </>
    )
}

export default TodoList
