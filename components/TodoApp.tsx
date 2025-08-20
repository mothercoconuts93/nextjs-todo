'use client'

import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import Filters from './Filters'
import TodoList from './TodoList'
import type { Todo } from './types'  

/**
 * main TodoApp component
 * this is the parent component that manages all the functionality
 * it holds the main state and passes down functions to child components
 */

const TodoApp = () => {
    // State management

    const [todos, setTodos] = useState<Todo[]>([])  // array to store all todo items
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all') //  filter settings

    // create task
    function addTodo(text: string) {
        const newTodo: Todo = { 
            id: Date.now().toString(), 
            text, 
            done: false, 
            createdAt: Date.now() 
        }

        setTodos(prev => [newTodo, ...prev]) // adds new todo to the beginning of the array
    }

    // toggle task - switches a task between completed/non completed
    function toggleTodo(id: string) {
        // if ids match, flip the 'done' status
        // if ids don't match, keep task unchanged
        setTodos(prev => prev.map(t => 
            (t.id === id ? { ...t, done: !t.done } : t)))
    }

    // delete single task
    function deleteTodo(id: string) {
        // filters task with matching id
        // only keeps task whose id doesn't match the one we want to delete
        setTodos(prev => prev.filter(t => t.id !== id))
    }

    // clear completed or all
    function clearCompleted() {
        // keeps task that are not complete
        setTodos(prev => prev.filter(t => !t.done))
    }
    function clearAll() {
        // erases all tasks
        setTodos([])
    }

    // counter for number of active tasks that are not completed
    const activeCount = todos.filter(t => !t.done).length

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">To Do List App</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks</h2>

                {/* input component */}
                <TodoInput onAdd={addTodo} />

                {/* filters component */}
                <Filters
                    filter={filter}
                    onChangeFilter={setFilter}
                    onClearCompleted={clearCompleted}
                    onClearAll={clearAll}
                    activeCount={activeCount}
                />

                {/* list component - displays all tasks */}
                <TodoList 
                    todos={todos} 
                    filter={filter} 
                    onToggle={toggleTodo} 
                    onDelete={deleteTodo} 
                />
            </div>
        </div>
    )
}

export default TodoApp