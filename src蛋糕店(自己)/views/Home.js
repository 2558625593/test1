import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {connect} from 'react-redux'
import Item from '../component/Item'
import Card from '../component/Card'
class Home extends Component {
    render() {
        let {list,sum} = this.props
                
        return (
            <>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">slide1</div>
                    <div className="swiper-slide">slide2</div>
                    <div className="swiper-slide">slide3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className='content'>
                    <Card/>
                    <p>选择一份礼物</p>
                  {
                    list.map((item,index)=><Item key={index} {...item}/>)
                  } 
                  <p>总价：<span>{sum}</span></p>
                  <button onClick={()=>{
                      this.props.history.push('/my')
                  }}>我的</button>
                </div>   
            </>
        );
    }
    componentDidMount(){
        this.Swiper = new Swiper ('.swiper-container',{
            loop:true,
            autoplay:{
              delay:1000,
              stopOnLastSlide: false,
              disableOnInteraction:false  
            },
            pagination:{
                el:'.swiper-pagination'
            }
        })
    }
}

export default connect((state)=>{
    return {
        list:state.list,
        sum:state.sum
    }
},(dispatch)=>{
    return {
        get:()=>{
            dispatch({type:'GET'})
        }   
    }
})(Home);