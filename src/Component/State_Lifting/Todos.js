import React from 'react'
import { Todo } from './Todo';

export const Todos = (props) => {
    console.log(props.todos);
  return (
    <div>  
        {props.todos.map((todo) => (
        <Todo  todo={todo} />
        ))}
    </div>
  )
}
