/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:06:10
 * @LastEditTime: 2019-10-17 15:00:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store';

class Total extends Component {
    render() {
        let {total,count}=store.getState()
        return (
            <div className='total'>
                总价：{total}    总个数：{count}
            </div>
        );
    }
}

export default Total;