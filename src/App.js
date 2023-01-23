import React, {useState, useRef} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  //const [todos, setTodos] = useState([{id:1,name:'To do 1',complete:true},{id:2,name:'To do 2',complete:false}])
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function toggleTodo(id){
    const newTodos = [...todos] 
    const todo = newTodos.find(todo=>todo.id===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name ===''){
      return
    }
    setTodos(prevToDos=>{
      return [...prevToDos,{id:uuidv4(),name:name,complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodo(e){
    const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodo}>Clear completed</button>
      <div>{todos.filter(todo=>!todo.complete).length} to do left </div>
    </>
  )
}



export default App;
