import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class myFooter extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/layout/home">首页</NavLink>
                <NavLink to="/traive">旅游</NavLink>
                <NavLink to="/my">我的</NavLink>
            </div>
        );
    }
}

export default myFooter;