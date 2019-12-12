/*
 * @Description: In User Settings Edit数据
 * @Author: your name
 * @Date: 2019-10-21 11:48:52
 * @LastEditTime: 2019-10-22 11:23:32
 * @LastEditors: Please set LastEditors
 */
import Detail from '../views/Detail'
import Home from '../views/Home'
import Login from '../views/Login'
import Movie from '../views/home/Movie'
import Cinema from '../views/home/Cinema'
import My from '../views/home/My'
import Address from '../views/Address'
import Search from '../views/Search'
const routerList = [
    {
        path: '/detail/:id',
        component: Detail
    },
    {
        path: '/address',
        component: Address
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/home',
        component: Home,
        children:[
            {
                path:'/home/movie',
                component:Movie
            },
            {
                path:'/home/cinema',
                component:Cinema
            },
            {
                path:'/home/my',
                component:My
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        meta:{title:'登录'}
    }, {
        redirect: '/home/movie/hot'
    }
]
export default routerList
