/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:37:04
 * @LastEditTime: 2019-10-16 12:08:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Layout from './Layout'
import Detail from './Detail'
import Login from './Login'
import MyHeader from '../components/MyHeader'
class App extends Component {
    render() {
        return (
            <div className='app'>
                <Router>
                    <Switch>
                        <Route path='/layout' render={(props)=>{
                            return <Layout {...props} />
                        }}></Route>

                        {/* <Route path='/layout' component={Layout}></Route> */}
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Redirect to='/layout/home'></Redirect>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;