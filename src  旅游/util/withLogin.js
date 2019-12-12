/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:01:45
 * @LastEditTime: 2019-10-18 15:04:55
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

const withLogin=(Comp)=>{
     class NewComp extends Component{
        componentWillMount(){
            //判断
            if(!localStorage.user){
                this.props.history.push('/login')
            }
        }
        render(){
            return <Comp/>
        }
    }
    return NewComp
}
export default withLogin