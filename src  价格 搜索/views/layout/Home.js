/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 10:37:45
 * @LastEditTime: 2019-10-19 09:52:06
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from "axios"
import store from "../../store"
import Item from "../../components/Item"
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import swiperJson from '../../data/swiper.json'
import LazyLoad from 'react-lazyload'
class Home extends Component {

    render() {
        let { datas } = store.getState()

        return (
            <div className='home'>
                <div><input type='text' onClick={() => {
                    this.props.history.push('/search')
                }} /></div>
                <button onClick={
                    () => {
                        this.props.history.push('/travel')
                    }
                }>旅游</button>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            swiperJson.map((item, index) => {
                                return (
                                    <div key={index} className="swiper-slide"><img src={item.img} /></div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 轮播图 */}

                <button onClick={this.sortFn}>价格</button>
                <div className='list'>
                    {
                        datas.map((item, index) => <Item key={index} {...item} />)
                    }
                </div>
            </div>
        );
    }

    //价格的排序  对原数组进行sort
    sortFn = () => {
        store.dispatch({ type: 'SORT' })
    }
    componentDidMount() {
        axios.get("/list").then(({ data }) => {
            store.dispatch({ type: "DATA", data })
        })
        // 只能在dom生成之后new swiper
        this.swiper = new Swiper('.swiper-container', {
            loop: true,
            auto: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }
}

export default Home;