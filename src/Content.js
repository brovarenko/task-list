import React, { useState}  from 'react'
import EditContent from './EditContent'
export default function Content(props) {
    const {task, addContent} = props
    const [desc, setDesc] = useState(false)
    const handleClick = () => {
        setDesc(!desc)
    }

    return (
        <div>
        {desc ? <EditContent task={task}  addContent={addContent} closeDescription={handleClick}/> : <div className="Content">
        <div id="content">{task.content}</div>
        <button className="EditBtn" onClick={handleClick}>...</button>
        </div> }
        </div>
    )
}