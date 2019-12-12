import React, { Component } from 'react';
import RouteView from '../router/RouteView'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
class Home extends Component {
    state={
        list:['全部','商圈','便利商超'],
        currentIndex:0,
        type:''
    }
    render() {
        let{list,currentIndex} =this.state
        let { routes ,address} = this.props
        return (
            <>
                <div className='header'>
                    <span onClick={()=>{
                        this.props.history.push('/city')
                    }}>{address}</span>
                    <input type='text' placeholder='山西好风光'/>
                    <span>优惠券</span>
                    <span onClick={()=>{
                        this.props.history.push('/sore')
                    }}>收藏</span>
                </div>
                <p>
                    <NavLink to='/home/buy'>必买</NavLink>
                    <NavLink to='/home/eat'>必吃</NavLink>
                </p>
                <div className='tab'>
                    {
                    list.map((item,index)=><p key={index} className={currentIndex==index?'active':''} onClick={this.tabFn.bind(null,index,item)}>{item}</p>)
                    } 
                </div>
                <RouteView routes={routes} />
            </>
        );
    }
    tabFn=(index,type)=>{
        let {getT} = this.props
        this.setState({
            currentIndex:index
        })
        getT(type)
    }
}

export default connect((state)=>{
    return {
        tab:state.tab,
        address:state.address
    }
},(dispatch)=>{
    return {
        getT:(name)=>{
            dispatch({type:'GET_TAB',name})
        }
    }
})(Home);