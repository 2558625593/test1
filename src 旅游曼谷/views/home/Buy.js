import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {connect} from 'react-redux'
class Buy extends Component {
    render() {
        let {tab,id} = this.props
        return (
            <div className='listbar'>
              {
                  tab.map((item,index)=><div key={index} className='list'>
                     <LazyLoad height={200}> <img src={item.imgUrl}  onClick={()=>{
                      this.props.history.push(`/detail/${item.productId}`)
                  }} /></LazyLoad>
                      <p>{item.title}</p>
                      <span>{item.promotionPrice}人{item.isRecommend?'取消收藏':'收藏'}</span>
                  </div>)
              } 
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        tab:state.tab
    }
})(Buy);