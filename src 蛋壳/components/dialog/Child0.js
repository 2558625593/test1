/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 12:26:16
 * @LastEditTime: 2019-10-15 15:22:11
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios'
class Child0 extends Component {
    render() {
        let { data} = this.props
        return (
            <ul className='child0'>
                {
                    data.map((item, index) => <li key={index} onClick={this.getAxiosType.bind(null,item.type)}>{item.txt}</li>)
                }
            </ul>
        );
    }
    getAxiosType = (type) => {
        let { setList } = this.props
        Axios.get('/search?type=' + type).then(({ data }) => {
            //数据返回
            console.log(data)
            setList(data)
        })
    }
}

export default Child0;