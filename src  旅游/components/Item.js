/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:23:41
 * @LastEditTime: 2019-10-18 17:25:35
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
class Item extends Component {
    render() {
        let { img, id } = this.props
        return (
            <div className='item' onClick={() => {
                this.props.history.push(`/detail/${id}`)
            }}>
                <img src={img} />
            </div>
        );
    }
}

export default withRouter(Item);