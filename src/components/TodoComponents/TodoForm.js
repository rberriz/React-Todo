import React, { Component } from 'react';
import './Todo.css';

export default class TodoForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.addTodo}>
                    <input 
                    type='text'
                    placeholder='Enter Todo Items'
                    value={this.props.task}
                    name='task'
                    onChange={this.props.handleChange}
                    />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        );
    }
};

 {/* onClick={this.props.addTodo}  */}




