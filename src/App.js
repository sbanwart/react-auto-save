import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IdleTimer from 'react-idle-timer';
import { Form, FormGroup, FormControl, ControlLabel, Modal, HelpBlock, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  save() {
    console.log("Saving data...");
  }

  render() {
    return (
      <IdleTimer ref="idleTimer" timeout={3000} startOnLoad={false} idleAction={this.save}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Edit User</h2>
          </div>
          <div>
            <Form>
              <FormGroup controlId="nameGroup">
                <ControlLabel>Name:</ControlLabel>
                <FormControl typeof="text" placeholder="Name" />
                <FormControl.Feedback />
                <HelpBlock>Enter full name</HelpBlock>
              </FormGroup>
              <FormGroup controlId="emailGroup">
                <ControlLabel>Email:</ControlLabel>
                <FormControl typeof="text" placeholder="user@example.com" />
                <FormControl.Feedback />
                <HelpBlock>Enter email address</HelpBlock>
              </FormGroup>
            </Form>
          </div>
        </div>
      </IdleTimer>
    );
  }
}

export default App;
