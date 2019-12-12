/*
 * @Author: your name
 * @Date: 2019-10-22 14:53:06
 * @LastEditTime: 2019-10-23 11:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\components\Item.js
 */
import React, { Component } from 'react';
import MyButton from './Button'
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        console.log(1)
        let { avatar, title,tags,author, summary, is_time_limited_free, id, tip_welth_sum } = this.props
        return (
            <div className='item'>
                <img src={avatar} />
                <div className='mid'>
                    <p className='top'>
                        <span>{title}</span>
                        <span>{tip_welth_sum}月票</span>
                    </p>
        <p className='mid'><span>{author}</span></p>
        <p>
            {
    tags.map((item,index)=><span key={index}>{item} {tags.length-1===index?null:'|'} </span>)
            }
        </p>
                    <p className='txt'>
                        {summary}
                    </p>
                    <div className='bottom'>
                        <span>2018-09-17 19:45</span>
                        <div>
                            <button onClick={this.toDetail.bind(null,id)}>书籍详情</button>
                            <MyButton flag={is_time_limited_free} id={id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    /**
     * 跳详情页，传id
     */
    toDetail=(id)=>{
        this.props.history.push(`/detail/${id}`)
    }
}

export default withRouter(Item);