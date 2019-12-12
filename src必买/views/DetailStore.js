/*
 * @Author: your name
 * @Date: 2019-10-28 11:03:33
 * @LastEditTime: 2019-10-28 11:26:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\DetailStore.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'

class DetailStore extends Component {
    render() {
        let {detail:{isRecommend, peopleCount, title, imgUrl,productId},storeFn}=this.props
        return (
            <div className='detail'>
                <img src={imgUrl} />
                <p>{title}</p>
        <button className={isRecommend?'active':null} onClick={storeFn.bind(null,productId)}>{peopleCount}{isRecommend?'取消收藏':'收藏'}</button>
            </div>
        );
    }
    componentDidMount(){
        //仓库取详情数据
        this.props.getDetail(this.props.match.params.id)
    }
}

export default connect((state)=>{
    return {
        detail:state.detail
    }
},(dispatch)=>{
    return {
        getDetail:(id)=>{
            dispatch({type:'DETAIL',id})
        },
        storeFn:(id)=>{
            dispatch({type:'STORE',id})
        }
    }
})(DetailStore);