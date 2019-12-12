/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 11:05:47
 * @LastEditTime: 2019-10-18 14:46:57
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class MyFooter extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/layout/home'>首页</NavLink>
                <NavLink to='/travel'>旅游</NavLink>
                <NavLink to='/layout/my'>我的</NavLink>
            </footer>
        );
    }
}

export default MyFooter;