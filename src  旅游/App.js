/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 09:40:07
 * @LastEditTime: 2019-10-18 15:38:21
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route,NavLink } from 'react-router-dom'
import withLoading from './util/withLoading'
import store from './store'
// import Layout from './views/Layout'
// import Travel from './views/Travel'
// import Login from './views/Login'

const Layout = withLoading(()=>import('./views/Layout'))
const Travel = withLoading(()=>import('./views/Travel'))
const Login = withLoading(()=>import('./views/Login'))
const Detail = withLoading(()=>import('./views/detail'))
class App extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <div className="meituan">
                <Router>
                    <Switch>
                        <Route path="/layout"  component={Layout}></Route>
                        <Route path="/travel"  component={Travel}></Route>
                        <Route path="/login"  component={Login}></Route>
                        <Route path="/detail/:id"  component={Detail}></Route>
                        <Redirect to='/layout'></Redirect>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;