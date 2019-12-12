/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-10-17 09:22:16
 * @LastEditTime: 2019-10-17 15:04:31
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store';

class Item extends Component {
    render() {
        let {img,title,price,num,flag,id,index}=this.props
        return (
            <div className='item'>
                <input type='checkbox' checked={flag} onChange={(e)=>{
                    store.dispatch({type:'CHANGE_FLAG',id,flag:e.target.checked})
                }}/>
                <img src={img} />
                <p>单价：{price}</p>
                <p>
                    <button onClick={this.dec.bind(null,id)}>-</button>
                    {num}
                    <button onClick={this.Add.bind(null,id)}>+</button>
                </p>
            </div>
        );
    }

    Add=(id)=>{
        // let {list}=store.getState()
        // list[id].num++            
        store.dispatch({type:'ADD',id})
    }
    dec=(id)=>{
        store.dispatch({type:'DEC',id})
    }
}

export default Item;