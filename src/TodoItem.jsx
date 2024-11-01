function TodoItemFunc({ todo, onChange, onDelete }) {
    return(
        <div>
            <div className="div">
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    // e.target.checked
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                {todo.text}
                <button onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </div>
        </div>
    )
}

export default TodoItemFunc