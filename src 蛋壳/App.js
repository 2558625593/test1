import React, { Component } from 'react';
import {BrowserRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Layout from './layout'
import Login from './login';
import Detail from './Detail';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path="/layout" component={Layout}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/login" component={Login}/> 
          <Redirect to="/layout/list"/>
        </BrowserRouter>
    );
  }
}

export default App;