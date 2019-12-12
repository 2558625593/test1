/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:53:48
 * @LastEditTime: 2019-10-22 10:40:03
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import RouterView from './RouterView'
import routerList from './routerList'
class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={routerList} />
            </BrowserRouter>
        );
    }
}

export default index;