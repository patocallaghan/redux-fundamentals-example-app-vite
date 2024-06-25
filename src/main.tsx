import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
import './api/server'
import { fetchTodos } from './features/todos/todosSlice'

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: 'Hi!'
store.dispatch(fetchTodos)

// console.log('State after dispatch: ', store.getState())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
