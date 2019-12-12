/*
 * @Author: your name
 * @Date: 2019-10-25 09:48:34
 * @LastEditTime: 2019-10-25 10:28:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\router\router_list.js
 */
import React from 'react'
import Login from '../views/Login'
import My from '../views/My'
import List from '../views/List'
export default [
    {
        path:'/list',
        component:List,
        meta:{title:'星品月蛋糕礼'}
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/login',
        component:Login
    },
    {
        redirect:'/list'
    }
]