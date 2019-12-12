/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 10:19:26
 * @LastEditTime: 2019-10-15 11:38:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class MySearchBar extends Component {
    render() {
        let {changeShow}=this.props
        return (
            <div className='bar'>
                <span onClick={()=>{changeShow(0)}}>合/整租</span>|
                <span onClick={()=>{changeShow(1)}}>位置</span>|
                <span onClick={()=>{changeShow(2)}}>价格</span>|
                <span onClick={()=>{changeShow(3)}}>更多</span>
            </div>
        );
    }
}

export default MySearchBar;