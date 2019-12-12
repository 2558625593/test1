/*
 * @Author: your name
 * @Date: 2019-10-26 09:00:41
 * @LastEditTime: 2019-10-28 10:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\Detail.js
 */
import React, { Component } from 'react';
import Axios from 'axios';

class Detail extends Component {
    state = {
        data:{} // 初始化
    }
    render() {
        let { data:{isRecommend, peopleCount, title, imgUrl,productId} } = this.state
        return (
            <div className='detail'>
                <img src={imgUrl} />
                <p>{title}</p>
        <button className={isRecommend?'active':null} onClick={this.storeFn.bind(null,productId)}>{peopleCount}{isRecommend?'取消收藏':'收藏'}</button>
            </div>
        );
    }
    componentDidMount() {
        // Axios.post('/detail',{id:this.props.match.params.id}).then(({data})=>{
        //     this.setState({data})
        // })
        Axios.get('/detail?id=' + this.props.match.params.id).then(({ data }) => {
            this.setState({ data })
        })
    }
    /**
     * 收藏
     * 调接口
     */
    storeFn=(id)=>{
        Axios.get('/store?id='+id).then(({data})=>{
            this.setState({ data })
        })
    }
}

export default Detail;