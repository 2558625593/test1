/*
 * @Author: your name
 * @Date: 2019-10-25 11:22:58
 * @LastEditTime: 2019-10-25 13:47:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\components\Footer.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
class Footer extends Component {
    render() {
        let { total } = this.props
        return (
            <footer>
                <span>{total}</span>
                <span className={total?'buy active':'buy'}>购买</span>
            </footer>
        );
    }
}

export default connect((state) => {
    return { ...state }
})(Footer);