/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:05:22
 * @LastEditTime: 2019-10-18 15:07:40
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
               <button onClick={()=>{
                   localStorage.user='mayun'
                   this.props.history.goBack()
               }}>登录</button> 
            </div>
        );
    }
}

export default Login;