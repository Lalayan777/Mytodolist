import { useState } from "react";
import './App.css'; 

function TodoFormFunc({onAdd}) {
    const [text, setText] = useState("")
    return(
        <form className="forma" onSubmit={(e)=>{
            e.preventDefault()
            onAdd(text)
            setText("");
        }}>
            <input placeholder="Add new" type="text" value={text} onChange={(e)=>{
                setText(e.target.value)
            }} />
            <button>ADD</button>
        </form>
    )
}
export default TodoFormFunc;