'use client'

import React from 'react'
import TodoItem from './TodoItem'
import { useTodoStore } from '@/store/store'

const TodoList = () => {

    const todos = useTodoStore(state => state.todos)
    const filter = useTodoStore(state => state.filter)


    const filteredTodos = todos.filter(todo => {
      if (filter === "all")
        return true
      if (filter === "active")
        return todo.completed
    })

    if (filteredTodos.length === 0)  {
      return <p className="mt-3 text-sm opacity-70">
        No tasks added yet — add one above.</p>
    }

    return (
        <ul className="mt-3 space-y-2">
          {filteredTodos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo}
            />
          ))}
        </ul>
    )
}

export default TodoList