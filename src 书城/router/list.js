/*
 * @Author: your name
 * @Date: 2019-10-22 14:57:49
 * @LastEditTime: 2019-10-22 16:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\router\list.js
 */
import withLoading from '../utils/withLoading'
// const List = withLoading(()=>import('../views/List'))
// const Detail = withLoading(()=>import('../views/Detail'))
// const My = withLoading(()=>import('../views/My'))
// const Login = withLoading(()=>import('../views/Login'))
import List from '../views/List'
import Detail from '../views/Detail'
import My from '../views/My'
import Login from '../views/Login'
export default [
    {
        path:'/home',
        component:List
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/my',
        component:My
    },
    {
        redirect:'/home'
    }
]