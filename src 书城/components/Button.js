/*
 * @Author: your name
 * @Date: 2019-10-22 16:13:15
 * @LastEditTime: 2019-10-23 14:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myreact\src\components\Button.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
/**
 * connect 可以将仓库的数据state以及dispatch函数写的方法 都映射到props上
 */
class Button extends Component {
    render() {
        let { flag,addBook,id } = this.props
        return (
            <>
                {
                    flag ? <button>已在书架</button> : <button className='green' onClick={addBook.bind(null,id)}>加入书架</button>
                }
            </>
        );
    }
    /**
     * 加入书架功能  根据id修改的store中的数据
     */
    // addBook=()=>{}
}

export default connect(null,(dispatch)=>{
    return {
        addBook:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        } 
    }
})(Button);