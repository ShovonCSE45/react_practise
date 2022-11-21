import React, { useState } from 'react'
import { New_todo } from './New_todo';
import { Todos } from './Todos';

const dummytodos = ["todo1","todo2", "todo3", "todo4"];

export const Home = () => {
  const [todos, setTodos] = useState (dummytodos);
  
  const handleNewTodo = (newTodo) => {
    setTodos ([...todos, newTodo]);
  }
  return (
    <div>
        <h2>I am from Home</h2>
        <Todos todos={todos} />
        <New_todo onTodo = {handleNewTodo} />

    </div>
  )
}
