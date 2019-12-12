/*
 * @Description: In User Settings Edit<>
 * @Author: your name
 * @Date: 2019-10-17 09:20:29
 * @LastEditTime: 2019-10-17 14:45:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Traive from './Traive'
import My from './My'
import Layout from './layout'
import Login from './Login';
import Detail from './detail'
class App extends Component {
    render() {
        return (
            <>
               <BrowserRouter>
                    <Route path="/layout" component={Layout} />
                    <Route path="/traive" component={Traive} />
                    <Route path="/my" component={My} />
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/login" component={Login} />
                    <Redirect to="/layout/home" />
               </BrowserRouter>
            </>
        );
    }
}

export default App;
