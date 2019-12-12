import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom'
import Home from '../views/Home';
import List from '../views/List';
import My from '../views/My';
import Lease from '../views/Lease';
class MyFooter extends Component {
    render() {
        return (
            <div className="myfooter">  
                <NavLink to="/layout/home">
                    首页
                </NavLink>
                <NavLink to="/layout/list">
                    找房
                </NavLink>
                <NavLink to="/layout/lease">
                    租赁
                </NavLink>
                <NavLink to="/layout/my">
                    我的
                </NavLink>
            </div>
        );
    }
}

export default MyFooter;