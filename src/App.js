import './App.css';
import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router-dom';
import Login from './login';
import Register from './register';

export default class App extends Component{
  render(){
      return(
        <Router history={hashHistory}>
          <Route path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Router>
      )
  }
}
