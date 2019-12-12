/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:49:22
 * @LastEditTime: 2019-10-16 12:12:44
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import MyHeader from '../../components/MyHeader'
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <MyHeader title={'首页'}/>
                首页
            </div>
        );
    }
}

export default Home;