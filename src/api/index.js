import v4 from 'uuid/v4'

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true,
    },
    {
      id: v4(),
      text: 'ho',
      completed: true,
    },
    {
      id: v4(),
      text: 'let’s go',
      completed: false,
    }
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) => (
  delay(500).then(() => {
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
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    }
    fakeDatabase.todos.push(todo)
    return todo
  })
)

export const removeTodo = id => (
  delay(500).then(() => {
    const todos = fakeDatabase.todos.filter(todo => todo.id === id)
    return todos
  })
)

export const toggleTodo = id => (
  delay(500).then(() => {
    const todo = fakeDatabase.find(todo => todo.id === id)
    todo.completed = !todo.completed
    return todo
  })
)