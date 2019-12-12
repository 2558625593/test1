/*
 * @Author: your name
 * @Date: 2019-10-22 15:41:23
 * @LastEditTime: 2019-10-22 15:43:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\utils\withLogin.js
 */
import React, { Component } from 'react'
export default function withLogin(Comp) {
    return class NewCom extends Component {
        componentWillMount() {
            if(!localStorage.user){
                this.props.history.push('/login')
            }
        }
        render() {
            return <Comp />
        }
    }
}