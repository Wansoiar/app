import React, { Component } from 'react';
import './register.css';
export default class Register extends Component {

  render() {
    return (
      <div>
        <h1>遇TA</h1>
        <div>
          <input placeholder="请输入手机号"></input>
          <input placeholder="请输入密码"></input>
          <input placeholder="请再次输入密码"></input>
        </div>
        <button>注册</button>
      </div>
    )
  }
}