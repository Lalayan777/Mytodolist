import { useReducer, useState } from 'react';
import './App.css'; 
import TodoListFunc from './TodoList';
import TodoFormFunc from './TodoForm';
import TodoFuter from './TodoFuter';

function reducer(state, action) {
  if(action.type === "CREAT_TODO"){
    return [...state, action.payload]
  }
  if (action.type === "DELETE_TODO") {
    return state.filter((t)=> t.id !== action.payload.id)
  }
  if (action.type === "CHANGE_TODO") {
    return state.map((todo)=>{
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
  }
  if (action.type === "CLEAR_TODO") {
    return state.filter((todo) => !todo.isCompleted)
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {id: Math.random(), text: "Learn JS", isCompleted: false},
    {id: Math.random(), text: "Learn CSS", isCompleted: false},
    {id: Math.random(), text: "Learn HTML", isCompleted: false}
  ])
  return (
    <div className="App">
      <TodoFormFunc onAdd={(text)=>{
            // setTodos([
            //   ...todos,
            //   {id: Math.random(), text: text, isCompleted: false}
            // ])
            dispatch({
              type: "CREAT_TODO",
              payload: {id: Math.random(), text: text, isCompleted: false}
            })
      }} />
      <TodoListFunc 
      todos={todos}
      onDelete={(todo)=>{
          // setTodos(todos.filter((t)=> t.id !== todo.id))
          dispatch({
            type: "DELETE_TODO",
            payload: todo
          })
      }}
      onChange={(newTodo) => {
        // setTodos(
          // todos.map((todo)=>{
          //   if (todo.id === newTodo.id) {
          //     return newTodo
          //   }
          //   return todo
          // })
        // )
        dispatch({
          type: "CHANGE_TODO",
          payload: newTodo
        })
      }}
      />
      <TodoFuter todos={todos} onClear={()=>{
        // setTodos(todos.filter((todo) => !todo.isCompleted))
        dispatch({
          type: "CLEAR_TODO",
          payload: "todo"
        })
      }} />
    </div>
  );
}

export default App;

