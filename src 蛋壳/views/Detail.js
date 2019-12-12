/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:43:43
 * @LastEditTime: 2019-10-15 15:54:16
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';

class Detail extends Component {
    state = {
        obj: {}
    }
    render() {
        console.log(this.props)
        let {obj}=this.state
        return (
            <div className='detail'>
                <img src={obj.img}/>
                <p>{obj.title} {obj.price}元/月</p>
                <p>地铁{obj.subway}站,距离{obj.subwaydistance}米</p>
            <p className='bottom'>
                <button onClick={
                    ()=>{
                        this.props.history.push('/layout/my')
                    }
                }>收藏</button> <button>预约看房</button>
            </p>
            </div>
        );
    }
    componentDidMount() {
        Axios.post('/detail', { id: this.props.match.params.id }).then(({ data }) => {
            this.setState({
                obj: data
            })
        })
    }
}

export default Detail;