import Home from '../views/Home'
import Detail from '../views/Detail'
import Login from '../views/Login'
import My from '../views/My'
import Sore from '../views/Sore'
import City from '../component/city'
import Buy from '../views/home/Buy'
import Eat from '../views/home/Eat'
const routerList=[
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
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/sore',
        component:Sore
    },
    {
        path:'/city',
        component:City
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
        redirect:'/home/buy'
    }
]
export default routerList