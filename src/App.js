import React from 'react';


import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoList,
      task: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault()
    this.setState(prevState => { 
      return {
        todoList: [
          ...prevState.todoList,
          {
            completed: false,
            id: Date.now(),
            task: prevState.task
          }
        ],
        task: ''
      };
    });
  };
     


//maybe issuewith todos

  toggleTask = taskId => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(taskItem => {
          if (taskItem.id === taskId) {
            return {
              task: taskItem.task,
              id: taskItem.id,
              completed: !taskItem.completed
            };
          } else {
            return taskItem;
          }
        })
      };
    });
  };

  //maybe issue with todos
  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(taskItem => {
          return !taskItem.completed;
        })
      };
    });
  };



  render() {
    return (
      <div className='app'>
        <h1>Todo List</h1>
        <TodoList todoList={this.state.todoList} toggleTask={this.toggleTask} />
        <TodoForm task={this.state.task} handleChange={this.handleChange} addTodo={this.addTodo} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
