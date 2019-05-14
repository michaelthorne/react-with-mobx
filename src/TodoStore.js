import { decorate, observable } from 'mobx'

class TodoStore {
  todos = ['buy milk', 'buy eggs']
  filter = ''
}

decorate(TodoStore, {
  todos: observable,
  filter: observable
})

let store = window.store = new TodoStore()

export default store