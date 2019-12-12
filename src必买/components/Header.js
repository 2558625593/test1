/*
 * @Author: your name
 * @Date: 2019-10-25 10:08:35
 * @LastEditTime: 2019-10-28 11:37:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\components\Header.js
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header>
                <button>曼谷</button>
                <button>优惠券</button>
                <button onClick={()=>{
                    this.props.history.push('/mystore')
                }}>收藏</button>
            </header>
        );
    }
}

export default withRouter(Header);