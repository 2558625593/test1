/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:51:47
 * @LastEditTime: 2019-10-22 10:28:55
 * @LastEditors: Please set LastEditors
 */
import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'
const RouterView = (props)=>{
    let {routes}=props
    return (
        <Switch>
            {
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>:
                <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} routes={item.children} meta={item.meta}/>
                }}/>)
            }
        </Switch>
    )
}
export default RouterView
