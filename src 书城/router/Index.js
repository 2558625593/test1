/*
 * @Author: your name
 * @Date: 2019-10-22 15:34:20
 * @LastEditTime: 2019-10-22 15:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\router\Index.js
 */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './RouterView'
import list from './list'
class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <RouterView routes={list}/>
                </BrowserRouter>
            </>
        );
    }
}

export default Index;