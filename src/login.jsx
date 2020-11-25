import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
export default class Login extends Component{

    register(){
        let history = createBrowserHistory();
        history.push('/register');
        history.go();
    }

    render() {
        return(
            <div>
                <h1>遇TA</h1>
                <button>登录</button>
                <button onClick={this.register}>注册</button>

            </div>
        )
    }
}