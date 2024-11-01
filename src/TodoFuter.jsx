function TodoFuter({ todos, onClear }) {

    let isComplited = todos.filter((todo) => todo.isCompleted).length
    return(
        <div className="div">
            <span>{todos.length}/{isComplited} Completed</span>
            <button onClick={onClear}>Clear completed</button>
        </div>
    )
}
export default TodoFuter;