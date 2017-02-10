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

    this.state = {
      name: '',
      email: '',
      hasChanges: false
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.save = this.save.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value, hasChanges: true });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, hasChanges: true });
  }

  save() {
    console.log("Saving data...");
    if (this.state.hasChanges)
    {
      this.setState({ hasChanges: false });
    }
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
                <FormControl typeof="text"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.handleNameChange} />
                <FormControl.Feedback />
                <HelpBlock>Enter full name</HelpBlock>
              </FormGroup>
              <FormGroup controlId="emailGroup">
                <ControlLabel>Email:</ControlLabel>
                <FormControl typeof="text"
                            value={this.state.email}
                            placeholder="user@example.com"
                            onChange={this.handleEmailChange} />
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
