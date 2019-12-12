/*
 * @Author: your name
 * @Date: 2019-10-26 09:12:30
 * @LastEditTime: 2019-10-26 09:57:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\list\Eat.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Eat extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                吃
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        product1:state.product1
    }
})(Eat);