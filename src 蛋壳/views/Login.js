/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 16:00:21
 * @LastEditTime: 2019-10-16 10:51:45
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Login extends Component {
    state = {
        user: '',
        pwd: ''
    }
    render() {
        let { user, pwd } = this.state
        return (
            <div>
                <p><input type='text' value={user} onChange={(e) => {
                    this.setState({
                        user: e.target.value
                    })
                }} /></p>
                <p><input type='password' value={pwd} onChange={(e) => {
                    this.setState({
                        pwd: e.target.value
                    })
                }} /></p>
                <input type='button' value='登录' onClick={
                    ()=>{
                        localStorage.user=user
                        //登录成功后，原路返回 .go(-1)
                        this.props.history.goBack()
                    }
                } />
            </div>
        );
    }
}

export default Login;