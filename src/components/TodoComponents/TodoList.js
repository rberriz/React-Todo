// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';


export default function TodoList(props) {
    return (
        <div>
            {props.todoList.map(item => {
                return <Todo item={item} toggleTask={props.toggleTask} /> 
        })}
        </div>
    )
}

