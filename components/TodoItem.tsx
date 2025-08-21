'use client'

import React from 'react'
import { useTodoStore, type Todo } from '@/store/store'


const TodoItem = ({todo}: {todo: Todo}) => {

  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  return (
    <li className="flex items-center justify-between gap-3 p-3 rounded-md hover:bg-gray-50 border border-gray-200">
      <label className="flex items-center gap-3 flex-1 cursor-pointer">
        <input 
          type="checkbox" 
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
          checked={!!todo.completed} 
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </label>

      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
          {new Date(todo.createdAt).toLocaleTimeString()}
        </span>
        <button 
          className="w-8 h-8 text-red-500 hover:bg-red-100 rounded transition-colors flex items-center justify-center" 
          onClick={() => deleteTodo(todo.id)} 
          aria-label={`Delete ${todo.text}`}>
            ✕
        </button>
      </div>
    </li>
  )
}

export default TodoItem