
function TodoItem({data1,toggleStatus}){
  return(
    <>
    <tr onClick={()=> toggleStatus(data1.id)}>
        <td>{data1.todo}</td>
        <td style={{color: data1.status?"green": "red"}}>{data1.status ? "true" :"false"}</td>
    </tr>
    
    
    </>
  )



}
export default TodoItem