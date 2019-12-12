/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 10:22:18
 * @LastEditTime: 2019-10-16 12:10:39
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class MyHeader extends Component {
    render() {
        return (
            <div className='header'>
                {this.props.title?this.props.title:'蛋壳公寓'}
            </div>
        );
    }
}

export default MyHeader;