/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:50:32
 * @LastEditTime: 2019-10-16 12:05:57
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class MyFooter extends Component {
    render() {
        return (
            <div className='footer'>
                {/* <NavLink to='/layout/home'> 首页</NavLink> */}
                <NavLink to={{pathname:'/layout/home',state:{title:'首页'}}}> 首页</NavLink>
                <NavLink to='/layout/list'> 快速查找</NavLink>
                <NavLink to='/layout/lease'> 租赁</NavLink>
                <NavLink to='/layout/my'> 我的</NavLink>
            </div>
        );
    }
}

export default MyFooter;