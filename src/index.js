import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TodoList from './TodoList'
import store from './TodoStore'

const root = document.getElementById('root')

ReactDOM.render(<TodoList store={store} />, root)
