/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:38:32
 * @LastEditTime: 2019-10-21 16:53:11
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';
import store from '../store'
class Detail extends Component {
    state = {
        obj: {},
        flag: false
    }
    render() {
        let { obj: { img, showst, nm }, flag } = this.state
        return (
            <div>
                <img src={img && img.replace('w.h', '128.180')} />
                <h1>{nm}{showst}</h1>
                <button onClick={this.zanFn}>{flag ? '取消点赞' : '点赞'}</button>
            </div>
        );
    }
    // 点赞 （点一下+1，再点-1）
    zanFn = () => {
        this.setState({
            flag: !this.state.flag
        }, () => {
            //在回调函数里写判断呀
            console.log(this.state.flag)
            // if(this.state.flag){
            //     store.dispatch({
            //         type:'ZAN',id:this.props.match.params.id
            //     })
            // }
            if (this.state.flag) {
                Axios.get(`/zan?id=${this.props.match.params.id}&&flag=${this.state.flag}`).then(({ data }) => {
                    this.setState({
                        obj: data
                    })
                })
            }else{
                Axios.get(`/zan?id=${this.props.match.params.id}&&flag=${this.state.flag}`).then(({data})=>{
                    this.setState({
                        obj:data
                    })
                })
            }
        })


    }
    componentDidMount() {
        let id = this.props.match.params.id
        Axios.post('/detail', { id }).then(({ data }) => {
            this.setState({
                obj: data
            })
        })
    }
}

export default Detail;