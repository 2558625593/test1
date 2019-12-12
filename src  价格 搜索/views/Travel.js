/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 10:38:17
 * @LastEditTime: 2019-10-18 14:51:16
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink,Switch,Route,Redirect } from 'react-router-dom'
import Country from './travel/Country'
import Abroad from './travel/Abroad'
class Travel extends Component {
    render() {
        return (
            <>
                <span onClick={()=>{
                    this.props.history.goBack()
                }}>&lt;</span>
                <div className='tab'>
                    <NavLink to='/travel/country'>国内</NavLink>
                    <NavLink to='/travel/abroad'>国际</NavLink>
                </div>
                <div className='con'>
                    <Switch>
                        <Route path='/travel/country' component={Country}></Route>
                        <Route path='/travel/abroad' component={Abroad}></Route>
                        <Redirect to='/travel/country'/>
                    </Switch>
                </div>
            </>
        );
    }
}

export default Travel;