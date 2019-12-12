import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class myFooter extends Component {
    render() {
        return (
            <div className='footer'>
                <NavLink to="/layout/movie">电影</NavLink>
                <NavLink to="/layout/cinema">影院</NavLink>
                <NavLink to="/layout/my">我的</NavLink>
            </div>
        );
    }
}

export default myFooter;