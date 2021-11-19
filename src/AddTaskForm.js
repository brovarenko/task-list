import React, {useState}  from 'react';

export default function AddTaskForm(props) {
    const addTask = props.addTask
    const [text, setText] = useState("")
    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const task = {title:text, content:"", id:Date.now()}
        if (text.length > 0) {
            addTask(task)
        }
        setText('')
    }

    return (
        <form className="addTaskForm" onSubmit={handleSubmit}>
            <input id="inputTask" type="text" onChange={handleTextChange} value={text}></input>
            <input type="submit" value="Add"></input>
        </form>
        
    )
}