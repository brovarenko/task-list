import React, {useState}  from 'react'

import Content from './Content';
import './App.css';

export default function Task({removeTask,addContent,task}){

    const [desc, setDesc] = useState(false)
    const handleClick = () => {
        setDesc(!desc)
    }
    const handleRemoveTask = () => {
        removeTask(task.id)
    }
    
    return (
        <div className="TaskList">
                 <div className="Task" >
                 <div className="title" onClick={handleClick}>
                 <div >{task.title}</div>
                 
                 <button  onClick={handleRemoveTask}>X</button>
                 
                 
                 </div>
                </div>
                {desc && <Content task={task}  addContent={addContent}/> }
                 
        </div>
    )
}