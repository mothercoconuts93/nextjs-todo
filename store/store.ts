// Zustand is a state management library that allows us to share state across components

import { create } from 'zustand'

export type Todo = {
    id: string        
    text: string      
    completed: boolean     
    createdAt: number 
}

// define the shape of Zustand store
// this interface describes all the data and functions the store will have
type TodoStore = {
    // state
    todos: Todo[]                                  
    filter: 'all' | 'active' | 'completed'        
  
    // action functions that change state
    addTodo: (text: string) => void 
    toggleTodo: (id: string) => void 
    deleteTodo: (id: string) => void    
    clearCompleted: () => void                
    clearAll: () => void                      
    setFilter: (filter: 'all' | 'active' | 'completed') => void  
  
    // functions that calculate values from state
    getActiveCount: () => number                   
    getFilteredTodos: () => Todo[]                  
}

// create zustand store
export const useTodoStore = create<TodoStore>((set, get) => ({
    // initial state
    todos: [],        
    filter: 'all',    
    
    // action functions
    addTodo: (text: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),  
            text,                       
            completed: false,               
            createdAt: Date.now()      
        }

        // set() is how to update state in Zustand
        set((state) => ({ todos: [newTodo, ...state.todos] }))
    },
    
    toggleTodo: (id: string) => {
        set((state) => ({
            todos: state.todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        }))
    },
    
    deleteTodo: (id: string) => {
        set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    },
    
    clearCompleted: () => {
        set((state) => ({
            todos: state.todos.filter(todo => !todo.completed)
        }))
    },
    
    clearAll: () => {
        set({ todos: [] })
    },
    
    // change filter 
    setFilter: (filter: 'all' | 'active' | 'completed') => {
        set({ filter }) 
    },
    
    // active tasks count
    getActiveCount: () => {
        const { todos } = get()  
        return todos.filter(todo => !todo.completed).length
    },
    
    // filtered todos function
    getFilteredTodos: () => {
        const { todos, filter } = get()  
            return todos.filter(todo => {
            if (filter === 'all') return true        
            if (filter === 'active') return !todo.completed  
            return todo.completed                         
        })
    }
}))