import React, { Component } from 'react';
import ToDoList from './components/ToDo/ToDoList/ToDoList';

import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'

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
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="container">
          <ToDoList items={items}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
