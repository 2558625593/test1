import Layout from "../views/Layout";
import Login from '../views/Login';
import Detail from '../views/Detail';
import Cinema from "../views/layout/Cinema";
import My from "../views/layout/My";
import Movie from "../views/layout/Movie";
const routerList = [
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/layout',
        component:Layout,
        children:[
            {
                path:'/layout/movie',
                component:Movie
            },
            {
                path:'/layout/cinema',
                component:Cinema
            },
            {
                path:'/layout/my',
                component:My
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        redirect:'/layout/movie/hot'
    }
]
export default routerList