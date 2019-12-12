/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 11:41:36
 * @LastEditTime: 2019-10-18 14:39:08
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
class Right extends Component {
    // constructor(props) {
    //     super(props)
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }
    render() {
        let { listn,currentIndex  } = store.getState()
        // console.log(selectObj)
        return (
            <div className='right'>
                {
                    listn[currentIndex].list.map((item,index)=><span key={index}>{item}</span>)
                }
            </div>
        );
    }
}

export default Right;