/*
 * @Author: your name
 * @Date: 2019-10-25 09:51:10
 * @LastEditTime: 2019-10-25 14:41:03
 * @LastEditors: Please set LastEditors
 * @Description: 列表每一条
 * @FilePath: \coffee\src\components\Item.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Item extends Component {
    render() {
        let { id, img, title, price, count ,add,dec,detail} = this.props
        console.log(this.props)
        return (
            <div className='item'>
                <img src={img} onClick={detail.bind(null,id)}/>
                <div className='mid'>
                    <p>{title}</p>
                    <p>￥{price}</p>
                </div>
                <div className='rig'>
                    {count?<button onClick={dec.bind(null,id)}>-</button>:null}
                    {count?<span>{count}</span>:null}
                    <button onClick={add.bind(null,id)}>+</button>
                </div>
            </div>
        );
    }
}

export default connect(null,(dispatch)=>{
    return {
        add:(id)=>{
            dispatch({type:'ADD',id})
        },
        dec:(id)=>{
            dispatch({type:'DEC',id})
        },
        detail:(id)=>{
            dispatch({type:'GET_DETAIL',id})
        }
    }
})(Item);