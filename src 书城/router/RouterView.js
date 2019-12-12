/*
 * @Author: your name
 * @Date: 2019-10-22 14:58:02
 * @LastEditTime: 2019-10-22 15:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\router\RouterView.js
 */
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

export default function RouterView(props){
    let {routes} =props
    return (
        <Switch>
            {
               routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>:
               <Route path={item.path} key={index} render={(props)=>{
                   return <item.component {...props} routes={item.children}/>
               }} />) 
            }
        </Switch>
    )
}

