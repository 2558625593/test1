/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:37:04
 * @LastEditTime: 2019-10-16 12:08:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
// import Layout from './views/Layout'
// import Detail from './views/Detail'
// import Login from './views/Login'
import RouterView from './router/RouterViews';
import routerList from './router/routerList';
class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <RouterView routes={routerList} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;