/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 09:19:57
 * @LastEditTime: 2019-10-17 16:35:26
 * @LastEditors: Please set LastEditors
 */
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.scss'
import BaiMap from './BaiMap'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
