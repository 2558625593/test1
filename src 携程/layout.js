import React, { Component } from 'react';
import Home from './views/Home'
import Traive from './Traive'
import MyFooter from  './component/myFooter'
import {Route,Redirect,Switch,NavLink} from 'react-router-dom'

class layout extends Component {
    render() {
        return (
            <div className="app">
                <div className='main'>
                    <Route path="/layout/home" component={Home} />
                </div>
                <MyFooter/>
            </div>
        );
    }
}

export default layout;