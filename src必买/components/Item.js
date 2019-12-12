/*
 * @Author: your name
 * @Date: 2019-10-25 09:51:10
 * @LastEditTime: 2019-10-28 10:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editcc
 * @FilePath: \coffee\src\components\Item.js
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let { imgUrl, title, peopleCount, productId,isRecommend } = this.props
        return (
            <div className='item'>
                <img src={imgUrl} onClick={()=>{
                    this.props.history.push('/detail/'+productId)
                }}/>
        <p><span>{title}</span>{isRecommend&&<button>去领取</button>}</p>
                <p><span>{peopleCount}人收藏</span><span>你曾领过优惠券</span></p>
            </div>
        );
    }
}

export default withRouter(Item);