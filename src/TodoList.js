import React from 'react'
import { observer } from 'mobx-react'
import './TodoList.css'

const TodoList = observer((props) => {
  const { clearCompleted, filter, filteredTodos } = props.store

  const todoList = filteredTodos.map(todo => (
    <li key={todo.id}>
      <input type="checkbox" value={todo.complete} checked={todo.complete} onChange={() => handleComplete(todo)} />
      {todo.label}
    </li>
  ))

  const handleAdd = (e) => {
    if (e.which === 13) {
      props.store.addTodo(e.target.value)
      e.target.value = ''
    }
  }

  const handleComplete = (todo) => {
    props.store.markCompleted(todo)
  }

  const handleFilter = (e) => {
    props.store.filter = e.target.value
  }

  return (
    <div className="TodoList">
      <h1>TodoList</h1>

      <div className="TodoListFormControl">
        <label htmlFor="new">Add:</label>
        <input id="add" type="text" onKeyPress={handleAdd} />
      </div>

      <div className="TodoListFormControl">
        <label htmlFor="filter">Filter:</label>
        <input id="filter" type="text" value={filter} onChange={handleFilter} />
      </div>

      <ul>{todoList}</ul>

      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  )
})

export default TodoList
