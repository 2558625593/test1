/*
 * @Author: your name
 * @Date: 2019-10-25 10:06:31
 * @LastEditTime: 2019-10-25 11:02:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\router\RouteIndex.js
 */
import React, { Component } from 'react';
import router_list from './router_list'
import RouterView from './RouterView'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import store from '../store/index'
class RouteIndex extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <RouterView routes={router_list} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default RouteIndex;