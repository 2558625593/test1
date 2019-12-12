/*
 * @Author: your name
 * @Date: 2019-10-25 09:48:34
 * @LastEditTime: 2019-10-28 11:36:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\router\router_list.js
 */
import React from 'react'
import Login from '../views/Login'
import My from '../views/My'
import Home from '../views/Home'
import Store from '../views/Store'
import Detail from '../views/DetailStore'
import Buy from '../views/home/Buy'
import Eat from '../views/home/Eat'
export default [
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/buy',
                component:Buy
            },
            {
                path:'/home/eat',
                component:Eat
            }
        ]
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/mystore',
        component:Store
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        redirect:'/home/buy'
    }
]