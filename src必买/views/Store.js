/*
 * @Author: your name
 * @Date: 2019-10-26 09:00:53
 * @LastEditTime: 2019-10-28 11:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\Store.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Store extends Component {
    state={
        storeList:[]
    }
    render() {
        
        return (
            <div>
                收藏耶
                {
    this.state.storeList.map((item,index)=><p>{item.title}</p>)
                }
            </div>
        );
    }
    componentDidMount(){
      let arr=  this.props.product0.filter(item=>item.isRecommend)
      this.setState({
        storeList:arr
      })
    }
}

export default connect((state)=>{
    return {
        product0:state.product0
    }
})(Store);