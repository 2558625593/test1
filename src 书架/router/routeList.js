import Home from '../views/Home'
import Detail from '../views/Detail'
import Login from '../views/Logain'
import My from '../views/My' 
const routeList=[
    {
        path:'/home',
        component:Home
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
export default routeList