'use client'

import React, { useState } from 'react'

const TodoInput = ({ onAdd }: { onAdd: (text: string) => void }) => {
    const [text, setText] = useState("")

    function submit(e?: React.FormEvent) {
        e?.preventDefault()
        const v = text.trim()
        if (!v) return
        onAdd(v)
        setText('')
    }

    return (
        <div className="flex gap-2 mb-6">
            <input
                className="input input-bordered flex-1 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a task to do..."
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && submit()}
                aria-label="New todo"/>
            <button onClick={() => submit()} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Add
            </button>
        </div>
    )
}

export default TodoInput