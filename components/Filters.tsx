'use client'

import React from 'react'

type Props = {
    filter: 'all' | 'active' | 'completed'
    onChangeFilter: (f: 'all' | 'active' | 'completed') => void
    onClearCompleted: () => void
    onClearAll: () => void
    activeCount: number
}

const Filters = ({ filter, onChangeFilter, onClearCompleted, onClearAll, activeCount }: Props) => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 mb-3">
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => onChangeFilter('all')}>
          All
        </button>
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => onChangeFilter('active')}>
          Active
        </button>
        <button 
          className={`px-3 py-1 rounded-md text-sm transition-colors ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => onChangeFilter('completed')}>
          Completed
        </button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600">{activeCount} active</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition-colors" onClick={onClearAll}>
            Clear All
          </button>
          <button className="px-2 py-1 text-xs bg-orange-200 hover:bg-orange-300 rounded transition-colors" onClick={onClearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filters