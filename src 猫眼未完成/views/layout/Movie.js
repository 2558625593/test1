import React, { Component } from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Hot from '../movie/Hot';
import Ing from '../movie/Ing';
class Home extends Component {
    render() {
        return (
            <>
            <div className='header'>
                <p>电影</p> 
            </div>
            <div className='main'>
               <span>西安</span>
                <NavLink to='/layout/movie/hot'>正在热映</NavLink>
                <NavLink to='/layout/movie/ing'>即将上映</NavLink>
                <Route path='/layout/movie/hot' component={Hot} />
                <Route path='/layout/movie/ing' component={Ing} /> 
            </div>
            
            </>
        );
    }
}

export default Home;