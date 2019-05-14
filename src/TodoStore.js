import { action, computed, decorate, observable } from 'mobx'

class Todo {
  constructor(label) {
    this.label = label
    this.id = Date.now()
    this.complete = false
  }
}

decorate(Todo, {
  todo: observable,
  id: observable,
  complete: observable
})

class TodoStore {
  todos = []
  filter = ''

  get filteredTodos() {
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.label))
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo))
  }

  clearCompleted = () => {
    const incompletedTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompletedTodos)
  }

  markCompleted = (todo) => {
    this.todos.find(t => t === todo).complete = true
  }
}


decorate(TodoStore, {
  todos: observable,
  filter: observable,
  filteredTodos: computed,
  markCompleted: action
})

let store = window.store = new TodoStore()

export default store