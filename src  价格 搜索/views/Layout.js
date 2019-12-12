/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 11:20:06
 * @LastEditTime: 2019-10-18 15:14:49
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import withLoading from '../util/withLoading'
// import My from './layout/My'
// import Home from './layout/Home'

import MyFooter from '../components/MyFooter'
import { Route, Switch, Redirect } from 'react-router-dom'
const My = withLoading(() => import('./layout/My'))
const Home = withLoading(() => import('./layout/Home'))
class Layout extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/layout/home' component={Home}></Route>
                    <Route path='/layout/my' component={My}></Route>
                    <Redirect to='/layout/home' />
                </Switch>
                <MyFooter />
            </>
        );
    }
}

export default Layout;