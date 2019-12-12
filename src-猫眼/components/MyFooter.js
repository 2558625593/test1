/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 13:50:13
 * @LastEditTime: 2019-10-21 15:01:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class MyFooter extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/home/movie/hot'>电影</NavLink>
                <NavLink to='/home/cinema'>影院</NavLink>
                <NavLink to='/home/my'>我的</NavLink>
            </footer>
        );
    }
}

export default MyFooter;