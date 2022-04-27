import React from 'react'
import '../App.css'

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, desc, comp } = todo // destructuring

  const handleTodoClick = () => {
      toggleTodo(id)
  }

  return (
    <li>
      <input type="checkbox" checked={comp} onChange={handleTodoClick} />
      <span className="task">{task} -  </span><span>{desc}</span>
    </li>
  )
}
