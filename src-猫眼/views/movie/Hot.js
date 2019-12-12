/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:40:29
 * @LastEditTime: 2019-10-21 15:59:27
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios';
import Item from '../../components/Item'
class Hot extends Component {
    render() {
        let {list}=this.props
        console.log(list)
        return (
            <div>
                {
    list.map((item,index)=><Item key={index} {...item}></Item>)
                }
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props)
        this.props.getList()
    }
}

export default connect((state)=>{return {
    list:state.list
}},(dispatch)=>{
   return {
       getList:()=>{
        //    debugger
        dispatch((dispatch)=>{
            Axios.get('/list').then(({data})=>{
                dispatch({type:'GET_LIST',data})
            })
        })
       }
   } 
})(Hot);