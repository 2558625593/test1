/*
 * @Author: your name
 * @Date: 2019-10-25 11:14:56
 * @LastEditTime: 2019-10-25 11:16:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\components\List.js
 */
import React, { Component } from 'react';
import Item from './Item'
import {connect} from 'react-redux'
class List extends Component {
    render() {
        let {list}=this.props
        return (
            <div className='list'>
                {
                    list.map((item,index)=><Item key={index} {...item}/>)
                }
            </div>
        );
    }
}

export default connect((state)=>{
    return {...state}
})(List);