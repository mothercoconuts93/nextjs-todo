'use client'

import React from 'react'
import TodoItem from './TodoItem'
import type { Todo } from './types' 

const TodoList = ({
  todos,
  filter,
  onToggle,
  onDelete,
}: {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}) => {

    const filtered = todos.filter(t => (filter === 'all' ? true : filter === 'active' ? !t.done : t.done))

    if (filtered.length === 0) return <p className="mt-3 text-sm opacity-70">No tasks added yet — add one above.</p>

    return (
        <ul className="mt-3 space-y-2">
        {filtered.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
        </ul>
    )
}

export default TodoList