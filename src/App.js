import './App.css';
import  { useState } from "react";

import Task from './Task';
import AddTaskForm from './AddTaskForm';
function App() {
 
  const [allTask, setAllTask] = useState([])
  
  
  
  const addTask = (task) => {
    setAllTask(prev=>[task,...prev])
   }
   
  const addContent = (taskId,taskContent) => {
    setAllTask((prev)=>{
      prev.forEach(e => { if(e.id===taskId){e.content = taskContent} } )
      return prev
    })
   }
   
   const removeTask = (taskId) => {
    setAllTask((prev) => prev.filter((task) => task.id !== taskId))
   }
    
 return ( 
 <div className="App">
   <h1>Task list</h1>
  
  <AddTaskForm addTask={addTask}/>
 
 {allTask.map(task=>(
  <Task  key={task.id} task={task}  addContent={addContent} removeTask={removeTask} />
 ))}
 
</div>
 )
}

export default App;
