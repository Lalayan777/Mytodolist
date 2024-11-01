import TodoItemFunc from "./TodoItem"

function TodoListFunc({ todos, onChange, onDelete }) {
     return(
        <div>
            {
                todos.map((todo) => {
                    return(
                        <TodoItemFunc
                         key={todo.key}
                         todo={todo}
                         onChange={onChange}
                         onDelete={onDelete}
                         />
                    )
                })
            }
        </div>
     )
}
export default TodoListFunc;