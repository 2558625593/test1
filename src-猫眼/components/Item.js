/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 15:48:37
 * @LastEditTime: 2019-10-21 16:20:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let { img,showst,id} = this.props
        return (
            <div className='item' onClick={()=>{
                this.props.history.push('/detail/'+id)
            }}>
                <img src={img.replace('w.h','128.80')} />
                <span>赞{showst}</span>
            </div>
        );
    }
}

export default withRouter(Item);