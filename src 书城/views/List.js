/*
 * @Author: your name
 * @Date: 2019-10-22 15:01:38
 * @LastEditTime: 2019-10-23 16:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\views\List.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Item from '../components/Item'
import Axios from 'axios';
class List extends Component {
    render() {
        let {list}=this.props
        return (
            <div className='list'>
                <button onClick={()=>{
                    this.props.history.push('/my')
                }}>my</button>
                {
                    list.map((item,index)=><Item key={index} {...item}/>)
                }
            </div>
        );
    }
    // componentDidMount(){
    //     console.log(11)
    //     Axios.get('/list').then(({data})=>{
    //         this.props.getlist(data.data)
    //     })
    // }
}

export default connect((state)=>{
    return {
        list:state.list
    }
},(dispatch)=>{
    return {
        getlist:(data)=>{
            dispatch({type:'GET_LIST',data})
        }
    }
})(List);