import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, comp } = todo // destructuring

  const handleTodoClick = () => {
      toggleTodo(id)
  }

  return (
    <li>
      <input type="checkbox" checked={comp} onChange={handleTodoClick} />
      {task}
    </li>
  )
}
