import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IdleTimer from 'react-idle-timer';
import { Panel, Col, Form, FormGroup, FormControl, ControlLabel, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      hasChanges: false,
      alertVisible: false
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.getAlertMsg = this.getAlertMsg.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.save = this.save.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value, hasChanges: true, alertVisible: true, alertStyle: 'danger' });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value, hasChanges: true, alertVisible: true, alertStyle: 'danger' });
  }

  getAlertMsg() {
    if (this.state.hasChanges) {
      return "Data has unsaved changes";
    }
    else {
      return "Data saved successfully";
    }
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  save() {
    if (this.state.hasChanges)
    {
      this.setState({ hasChanges: false, alertVisible: true, alertStyle: 'success' });
    }
  }

  render() {
    return (
      <IdleTimer ref="saveTimer" timeout={3000} startOnLoad={false} idleAction={this.save}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Edit User</h2>
          </div>
          <Panel>
            <Form horizontal>
              <FormGroup controlId="nameGroup">
                <Col componentClass={ControlLabel} sm={2}>
                  Name:
                </Col>
                <Col sm={10}>
                  <FormControl typeof="text"
                              value={this.state.name}
                              placeholder="Optimus Prime"
                              onChange={this.handleNameChange} />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
              <FormGroup controlId="emailGroup">
                <Col componentClass={ControlLabel} sm={2}>
                  Email:
                </Col>
                <Col sm={10}>
                  <FormControl typeof="text"
                              value={this.state.email}
                              placeholder="user@example.com"
                              onChange={this.handleEmailChange} />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            </Form>
          { this.state.alertVisible &&
            <Alert bsStyle={this.state.alertStyle} onDismiss={this.handleAlertDismiss}>
              {this.getAlertMsg()}
            </Alert>
          }
          </Panel>
        </div>
      </IdleTimer>
    );
  }
}

export default App;
