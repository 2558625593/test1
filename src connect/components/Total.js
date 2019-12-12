/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:06:10
 * @LastEditTime: 2019-10-17 16:50:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
// import store from '../store';
import {connect} from 'react-redux'
class Total extends Component {
    render() {
        // let {total,count}=store.getState()
        let {total,count}=this.props
        return (
            <div className='total'>
                总价：{total}    总个数：{count}
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        total:state.total,
        count:state.count
    }
})(Total);