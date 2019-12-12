/*
 * @Author: your name
 * @Date: 2019-10-22 14:47:58
 * @LastEditTime: 2019-10-23 13:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 
 * @FilePath: /e:\班级授课\1706E\myreact\src\App.js
 */
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import MyHeader from './components/MyHeader'
import RouterIndex from './router/Index'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MyHeader/>
                <RouterIndex/>
            </Provider>
        );
    }
}

export default App;