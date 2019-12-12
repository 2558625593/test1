/*
 * @Author: your name
 * @Date: 2019-10-25 09:49:26
 * @LastEditTime: 2019-10-26 09:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\List.js
 */
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import RouterView from '../router/RouterView'
class List extends Component {
    render() {
        console.log(this.props)
        let {routes}=this.props
        return (
            <div className='list'>
                <p className='tab'>
                    <NavLink to='/home/buy'>必买</NavLink>
                    <NavLink to='/home/eat'>必吃</NavLink>
                </p>
                <div className='list-con'>
                    <RouterView routes={routes}/>
                </div>
            </div>
        );
    }
}

export default List;