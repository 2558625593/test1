/*
 * @Author: your name
 * @Date: 2019-10-22 15:01:18
 * @LastEditTime: 2019-10-23 16:02:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\views\Detail.js
 */
import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'
import MyButton from '../components/Button'
class Detail extends Component {
    state = {
        data: {}
    }
    render() {
        console.log(this.props.detail)
        let { avatar, title, tags, author, summary, is_time_limited_free, id, tip_welth_sum } = this.props.detail
        let {addBook,getDetail}=this.props
        return (
            <>
                <button onClick={this.goBack}>返回</button>
                <img src={avatar} />
                <p>{title}</p>
                <MyButton flag={is_time_limited_free} id={id}/>
            </>
        );
    }
    goBack = () => {
        this.props.history.goBack()
    }
    componentDidMount() {
        /**
         * 请求后台，调详情数据
         */
        // Axios.post('/detail', { id: this.props.match.params.id }).then(({ data }) => {
        //     this.setState({
        //         data
        //     })
        // })
        /**
         * 从仓库中拿对应id的详情
         */
        let { getDetail } = this.props
        getDetail(this.props.match.params.id)
    }
}
/**
 * 取 仓库中的数据 detail
 * 触发reducer-case  GET_DETAIL
 */
export default connect((state) => {
    return {
        list:state.list,
        detail: state.detail
    }
}, (dispatch) => {
    return {
        getDetail: (id) => {
            // debugger
            dispatch({ type: 'GET_DETAIL', id })
        },
        addBook:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        } 
    }
})(Detail);