import Home from '../views/Home'
import Detail from '../views/Detail'
import Login from '../views/Login'
import My from '../views/My'
const routerList=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/detail/:id',
        component:Detail
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
        redirect:'/home'
    }
]
export default routerList