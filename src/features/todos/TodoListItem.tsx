import React from 'react'

import TimesSolid from '@/features/todos/times-solid.svg?react'
import { useSelector, useDispatch } from 'react-redux'
import { availableColors, capitalize } from '@/features/filters/colors'

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectTodoById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }

  const handleColorChanged = (e) => {
    onColorChange(e.target.value)
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id })
  }

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
