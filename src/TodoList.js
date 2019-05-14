import React from 'react'
import { observer } from 'mobx-react'
import './TodoList.css'

const TodoList = observer((props) => {
  console.log(props.store)
  return (
    <div className="TodoList">
      <h1>{props.store.todos[0]}</h1>
    </div>
  )
})

export default TodoList
