/*
 * @Author: your name
 * @Date: 2019-10-25 10:08:35
 * @LastEditTime: 2019-10-25 10:30:20
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
                <span onClick={()=>{
                    console.log(this.props)
                    this.props.history.goBack()
                }}>&lt;</span>
                <span>星品月蛋糕礼</span>
                <span>&nbsp;</span>
            </header>
        );
    }
}

export default withRouter(Header);