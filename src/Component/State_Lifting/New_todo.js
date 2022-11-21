import React, { useState } from 'react'

export const New_todo = (props) => {
    const [todo, setTodo] = useState("");

    const handleInputChange= (event) => {
        setTodo(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onTodo(todo);


    }
  return (
    <div>
        <h2>I am from New todo</h2>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="todo">New Todo:</label>
            <input type="text" id='todo' name='todo' value={todo} onChange ={handleInputChange} />
            <button>New Todo</button>
        </form>
    </div>
  )
}
