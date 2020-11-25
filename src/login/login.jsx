import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './login.css';
export default class Login extends Component {

  register() {
    let history = createBrowserHistory();
    history.push('/register');
    history.go();
  }

  render() {
    return (
      <div className="container">
        <div className="container-temp">
          <h1 className="app-title">遇TA</h1>
          <div className="btn-group">
            <button className="btn none-default">登录</button>
            <button className="btn none-default" onClick={this.register}>注册</button>
          </div>
        </div>
      </div>
    )
  }
}