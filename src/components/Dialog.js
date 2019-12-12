/*
 * @Author: your name
 * @Date: 2019-10-25 13:47:43
 * @LastEditTime: 2019-10-25 14:15:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\components\Dialog.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Dialog extends Component {
    render() {
        return (
            <div className='dialog'>
                <div className='content'>
                    <img src='http://img3.imgtn.bdimg.com/it/u=211392535,1709191700&fm=26&gp=0.jpg'/>
                    <span className='close' onClick={this.props.closeFn}>&times;</span>
                    <h2>￥131</h2>
                    <p>文字描述</p>
                </div>
            </div>
        );
    }
}

export default connect(null,(dispatch)=>{
    return {
        closeFn:()=>{
            dispatch({type:'CLOSE'})
        }
    }
})(Dialog);