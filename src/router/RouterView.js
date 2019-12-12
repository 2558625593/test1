/*
 * @Author: your name
 * @Date: 2019-10-25 09:53:25
 * @LastEditTime: 2019-10-25 10:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\router\RouterView.js
 */
import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'
export default (props) => {
    let { routes } = props
    return (
        <Switch>
            {
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect} />:
                <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} routes={item.children}/>
                }}/>)
            }
        </Switch>
    )
}