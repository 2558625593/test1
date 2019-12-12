/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 11:41:31
 * @LastEditTime: 2019-10-18 14:38:59
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
class Left extends Component {
    
    render() {
        let {listn,currentIndex}=store.getState()
        return (
            <div className='left'>
                {
                    listn.map((item,index)=>{
                        return <span key={index} className={index===currentIndex?'active':null} onClick={this.changeTab.bind(null,index)}>{item.type}</span>
                    })
                }
            </div>
        );
    }
    changeTab=(index)=>{
        store.dispatch({type:'CHANG_TAB',index})
    }
}

export default Left;