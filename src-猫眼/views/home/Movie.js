/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:39:28
 * @LastEditTime: 2019-10-22 11:22:29
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import Hot from '../movie/Hot'
import Ing from '../movie/Ing'
import { connect } from 'react-redux'
class Movie extends Component {
    render() {
        let { cityname } = this.props
        return (
            <>
                <div className='movie-tab'>
                    <span onClick={() => {
                        this.props.history.push('/address')
                    }}>{cityname}</span>
                    <NavLink to='/home/movie/hot'>正在热映</NavLink>
                    <NavLink to='/home/movie/ing'>即将上映</NavLink>
                    <span onClick={()=>{
                        this.props.history.push('/search')
                    }}>搜索</span>
                </div>
                <div className='movie-main'>
                    <Switch>
                        <Route path='/home/movie/hot' component={Hot}></Route>
                        <Route path='/home/movie/ing' component={Ing}></Route>
                    </Switch>
                </div>
            </>
        );
    }
}

export default connect((state) => {
    return {
        cityname: state.cityname
    }
})(Movie);