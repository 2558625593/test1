/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:23:41
 * @LastEditTime: 2019-10-19 09:32:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
class Item extends Component {
    render() {
        let { img, id, price,title } = this.props
        return (
            <div className='item' onClick={() => {
                this.props.history.push(`/detail/${id}`)
            }}>
    <img src={img} /> <span>{price}</span><span>{title}</span>
            </div>
        );
    }
}

export default withRouter(Item);