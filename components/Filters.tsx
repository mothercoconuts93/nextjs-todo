'use client'

import React from 'react'
import { useTodoStore } from '@/store/store'

const Filters = () => {

  const filter = useTodoStore(state => state.filter)
  const setFilter = useTodoStore(state => state.setFilter)
  const clearCompleted = useTodoStore(state => state.clearCompleted)
  const clearAll = useTodoStore(state => state.clearAll)
  const activeCount = useTodoStore(state => state.getActiveCount())



  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-3">
        {/* Filter buttons - highlight active filter */}
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setFilter('all')}>
          All
        </button>
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setFilter('active')}>
          Active
        </button>
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>

      {/* Status and action buttons */}
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600">
          {activeCount} active
        </div>

        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition-colors" 
            onClick={clearAll}>
            Clear All
          </button>
          <button className="px-2 py-1 text-xs bg-orange-200 hover:bg-orange-300 rounded transition-colors" 
            onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filters