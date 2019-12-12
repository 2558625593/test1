/*
 * @Description: 快速查找-子组件Item
 * @Author: your name
 * @Date: 2019-10-15 12:41:56
 * @LastEditTime: 2019-10-15 14:51:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        
        let {img,title,type,area,price,homenum,id}=this.props
        
        return (
            <div className='item' onClick={()=>{
                this.props.history.push('/detail/'+id)
             }}>
                <img src={img}/>
                <div className='right'>
                    <h4>{title}</h4>
                    <p>建筑面积{area}平米 <span>{price}元/月</span></p>
                    <p>{homenum}室|{type===0&&'整租'||type===1&&'合租'||type===2&&'月租'}</p>
                </div>
            </div>
        
        );
    }
}

export default withRouter(Item);