import React from 'react';

export default function Todo(props) {
    console.log(props);
    let completed = props.item.completed ? " completed" : "";
    return (
        
        <div 
            className={`task ${completed}`}
            key={props.item.id} 
            onClick={event => {
                props.toggleTask(props.item.id);
            }}
        >
        
            <p>{props.item.task}</p>
        </div>
    );
}
