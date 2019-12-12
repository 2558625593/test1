import Home from '../views/Home'
import Detail from '../views/Detail'
import Login from '../views/Login'
import My from '../views/My'
import BookRack from '../views/BookRack'
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
        path:'/login',
        component:Login
    },
    {
        path:'/bookrack',
        component:BookRack
    },
    {
        path:'/my',
        component:My
    },
    {
        redirect:'/home'
    }
]
export default routerList

