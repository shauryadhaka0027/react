import { useState } from 'react'
import './App.css'
import TodoList from './TodoList.jsx';

function Todo() {
  const [text, setText] = useState('');
  const [arrayText, setArrayTerxt] = useState([]);


  const addValue=(e)=>{
 setText(e.target.value)
  }
  const todoAdd=()=>{
   let obj={
    id: new Date().getTime(),
    todo:text,
    status: Math.random()< 0.5
   }
   let newArray=[...arrayText,obj]
   setArrayTerxt(newArray)
  }
 function toggle(id){
  const updateArray=arrayText.map(((task)=>{
    if(task.id===id){
      return ({...task,status:!task.status})
s

    }
    return task
  }))
  setArrayTerxt(updateArray)
 }
  return (
    <>
    <div  className='header-card'>
      <h1>Todo</h1>
    </div>
    <div className="input1"> 
    <input type="text"  onChange={addValue}  />
    <br />
    <button onClick={todoAdd}>Add Todo</button>
    </div>
    <div className='table'>
      <TodoList  task={arrayText}  toggleStatus={toggle} />
    </div>
  
    </>
  )
}

export default Todo
