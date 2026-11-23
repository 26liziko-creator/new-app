"use client"
import React, {useState} from 'react'
import styles from"./page.module.css"
// import { log } from 'node:console'

 const Todo = () => {
const[task,setTask] = useState("")
const [tasksArrey,setTasksArrey] = useState([]);
const onChange=(e)=>{
  setTask(e.target.value)
  console.log(task);
   
}
const addTask = () => {
  setTasksArrey((prevTask) => {
    return[...prevTask,
      {task:task,completed:false,id: crypto.randomUUID()},
    ]
  }

);
console.log(tasksArrey);

}

  return (
    <div className={styles.todoCont}>
      <input type="text" onChange={onChange} />
      <button>add text</button>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </div>
  )
}
export default Todo
