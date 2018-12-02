import v4 from 'uuid/v4'
import { loadState, saveState } from '../localStorage'

const fakeDatabase = {
  todos: loadState() || [],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) => (
  delay(100).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed)
      case 'completed':
        return fakeDatabase.todos.filter(todo => todo.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  })
)

export const addTodo = text => (
  delay(100).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    }
    fakeDatabase.todos.push(todo)
    saveState(fakeDatabase.todos)
    return todo
  })
)

export const removeTodo = id => (
  delay(100).then(() => {
    const todos = fakeDatabase.todos.filter(todo => todo.id === id)
    saveState(todos)
    return todos
  })
)

export const toggleTodo = id => (
  delay(100).then(() => {
    const todo = fakeDatabase.todos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    saveState(fakeDatabase.todos)
    return todo
  })
)