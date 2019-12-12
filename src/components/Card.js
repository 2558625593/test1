/*
 * @Author: your name
 * @Date: 2019-10-25 10:36:04
 * @LastEditTime: 2019-10-25 11:36:44
 * @LastEditors: Please set LastEditors
 * @Description: swiper组件
 * @FilePath: \coffee\src\components\MySwiper.js
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
class Card extends Component {
    state={
        currentIndex:0
    }
    render() {
        let {img}=this.props
        let {currentIndex}=this.state
        return (
            <div className='card'>
                <p>选择封面卡</p>
                {
                    img.map((item,index)=>(
                        <div onClick={this.tabFn.bind(null,index)} key={index} className={currentIndex===index?'myimg active':'myimg'}>
                            <img src='/images/1-bev.jpg'/>
                        </div>
                    ))
                }
            </div>
        );
    }
    tabFn=(index)=>{
       this.setState({
        currentIndex:index
       }) 
    }
}

export default connect((state)=>{
    return {...state}
})(Card);