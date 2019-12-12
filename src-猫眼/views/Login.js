/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:38:46
 * @LastEditTime: 2019-10-22 10:35:33
 * @LastEditors: Please set LastEditors
 */


import React, { Component } from 'react';

class Login extends Component {
    render() {
        console.log(this.props)
        return (
        <div>{this.props.meta.title}</div>
        );
    }
}

export default Login;