import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './components/ToDo/ToDoList/ToDoList';

import data from './data.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    };
  }

  render() {
    const {items} = this.state;
    return (
      <React.Fragment>
        <ToDoList items={items}/>
      </React.Fragment>
    );
  }
}

export default App;
