/*
 * @Author: your name
 * @Date: 2019-10-22 11:22:46
 * @LastEditTime: 2019-10-22 11:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\views\Search.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Search extends Component {
    state={
        keyword:''
    }
    render() {
        let {keyword}=this.state
        let {searchList,search}=this.props
        return (
            <div>
                <input type='text' value={keyword} onChange={(e)=>{
                    this.setState({
                        keyword:e.target.value
                    })
                } } onKeyDown={
                    (e)=>{
                       if(e.keyCode==13){
                        search(e.target.value)  
                       }
                    }
                }/>
                <span>X</span>
                {
                searchList.length?searchList.map((item,index)=>{return <span key={index}>{item.nm}</span>}):<span>暂无数据</span>
                }
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        searchList:state.searchList
    }
},(dispatch)=>{
    return {
        search:(keyword)=>{
            dispatch({type:'SEARCH',keyword})
        }
    }
})(Search);