/*
 * @Author: your name
 * @Date: 2019-10-25 09:50:15
 * @LastEditTime: 2019-10-25 10:32:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \coffee\src\views\Login.js
 */
import React, { Component } from 'react';

class Login extends Component {
    state={
        user:''
    }
    render() {
        return (
            <div>
                <p><input type='text' value={this.state.user} onChange={(e)=>{
                    this.setState({
                        user:e.target.value
                    })
                }}/></p>
                <p><input type='password'/></p>
                <button onClick={()=>{
                    localStorage.user=this.state.user
                    this.props.history.goBack()
                }}>登录</button>
            </div>
        );
    }
}

export default Login;