import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './components/ToDo/ToDoList/ToDoList';

class App extends Component {
  render() {
    const items = [
      {
        'name': 'Soan JS',
        'labels': 'JS',
        'priority': 'Cao',
        'assignees': 'Phat, Tai',
        'status': 'Done'
      },
      {
        'name': 'Soan HTML',
        'labels': 'JS',
        'priority': 'Cao',
        'assignees': 'Phat, Tai',
        'status': 'Doing'
      },
      {
        'name': 'Dev web',
        'labels': 'JS',
        'priority': 'Cao',
        'assignees': 'Phat, Tai',
        'status': 'Done'
      },
      {
        'name': 'Soan Python',
        'labels': 'JS',
        'priority': 'Cao',
        'assignees': 'Phat, Tai',
        'status': 'Done'
      },
      
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToDo App</h1>
        </header>
        <div>
          <ToDoList items={items}/>
        </div>
      </div>
    );
  }
}

export default App;
