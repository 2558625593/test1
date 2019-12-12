import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import MyFooter from './component/MyFooter'
import MyHeader from './component/MyHeader'
// import Home from './views/Home';
// import List from './views/List';
// import Lease from './views/Lease';
// import My from './views/My';
import withLoading from './uitl/withLoging'
const Home = withLoading(() => import('./views/Home'))
const List= withLoading(() => import('./views/List'))
const Lease = withLoading(() => import('./views/Lease'))
const My = withLoading(() => import('./views/My'))
class layout extends Component {
    render() {
        return (
            <div className="app">
              <div className="myheader">
                <MyHeader/>
              </div>
              <div className="main">
                <Route path="/layout/home" component={Home}/>
                <Route path="/layout/list" component={List}/>
                <Route path="/layout/lease" component={Lease}/>
                <Route path="/layout/my" component={My}/>
              </div>                  
              <MyFooter  className="myfooter"/> 
            </div>
        );
    }
}

export default layout;