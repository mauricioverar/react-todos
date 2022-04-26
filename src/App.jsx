// jsx = componente de react

import React, {useState, useRef, useEffect} from 'react' // estados state hooks
import { TodoList } from './components/TodoList'
import {v4 as uuidv4} from 'uuid';
// import logo from './logo.svg'
// import './App.css'

const KEY = 'todoApp.todos'

export function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    task: 'tarea 1',
    comp: false
  }]) // comp = completed

  const todoTaskRef = useRef()

  // useEffect(() => {}, []) // hooks

// get
  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(KEY))
    if (storeTodos) {
      setTodos(storeTodos)
    }
  }, [])

// add ó set
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos)) // mantiene datos en memoria mientras navegador está abierto
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.comp = !todo.comp // modificamos
    setTodos(newTodos) // reenviamos
  }

  const handleTodoAdd = () => {

    const task = todoTaskRef.current.value

    if (task === '') return

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), task, comp: false}]
    })

    todoTaskRef.current.value = null // limpia input
  }

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.comp)
    setTodos(newTodos)
  }

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <TodoList
        todos={todos} toggleTodo={toggleTodo}
      />

      <input ref={todoTaskRef} type="text" placeholder='new task' />

      <button onClick={handleTodoAdd}>➕</button>
      <button onClick={handleClearAll}>🗑</button>
      <div>te quedan {todos.filter((todo) => !todo.comp).length} tareas</div>

    </div>
  )
}
