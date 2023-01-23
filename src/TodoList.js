import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,toggleTodo}){
    
    return (
        todos.map(eachtodo=>{
            return <Todo key={eachtodo.id} todo={eachtodo} toggleTodo={toggleTodo}/>
        })
    )
}