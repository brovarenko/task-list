import React, {useState}  from 'react'


export default function EditContent(props) {
    const {task, addContent,closeDescription} = props
    const [content, setContent] = useState(task.content)
    
    const handleChange = (e) => {
        setContent(e.target.value)
    }
    const handleAddContent = (task,content) => {
        addContent(task,content)
        setContent('')
        closeDescription()
    }
    
    return (
        <div className="EditContent">
        <textarea 
        className="TextArea"
        name="description"
        placeholder="Details..."
        onChange={handleChange}
        value={content}
        />
        <button className="EditBtn" onClick={()=>handleAddContent(task.id,content)}>Save</button>
        </div>
         
    )
}