/*
 * @Author: your name
 * @Date: 2019-10-25 10:12:02
 * @LastEditTime: 2019-10-25 10:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\utils\withLogin.js
 */
import React, { Component } from 'react';

export default (Comp)=>{
 return   class NewComp extends Component{
     componentWillMount(){
         if(!localStorage.user){
             this.props.history.push('/login')
         }
     }
        render(){
            return <Comp/>
        }
    }
};