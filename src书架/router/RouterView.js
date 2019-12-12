/**
 * 根据路由数组来生成switch 组件
 */
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

function RouterView(props){
    let {routes} = props
    console.log(props);
    return (
        <Switch>
            {
                
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>:
                <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} routes={item.children} />
                }} />)
                // routes.map((item,index)=>item.redirect?<Redirect to = {item.redirect} key={index}/>:
                // <Route key={index} path={ item.path} render={(props)=>{
                //     return <item.component {...props} routes={item.children}/>
                // }}/>)
            }
        </Switch>
    )
}
export default RouterView