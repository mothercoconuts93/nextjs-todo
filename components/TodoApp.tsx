'use client'

import React from 'react'
import TodoInput from './TodoInput'
import Filters from './Filters'
import TodoList from './TodoList'
/**
 * main TodoApp component
 * This component now just renders the UI structure
 * All state management is handled by Zustand store
 */

const TodoApp = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">To Do List App</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks</h2>

                <TodoInput />
                <Filters />
                <TodoList />
            </div>
        </div>
    )
}

export default TodoApp