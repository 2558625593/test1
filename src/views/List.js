/*
 * @Author: your name
 * @Date: 2019-10-25 09:49:26
 * @LastEditTime: 2019-10-25 14:13:34
 * @LastEditors: Please set LastEditors
 * @Description: 列表页
 * @FilePath: \coffee\src\views\List.js
 */
import React, { Component } from 'react';
import Card from '../components/Card'
import MYList from '../components/List'
import Footer from '../components/Footer'
import Dialog from '../components/Dialog'
import {connect} from 'react-redux'
class List extends Component {
    render() {
        let {show,detail}=this.props
        return (
            <div className='mylist'>
                <img src='/images/banner.png'/>
                <Card />
                <MYList />
                <Footer />
               {
                   show&& <Dialog {...detail}/>
               }
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        show:state.show,
        detail:state.detail
    }
})(List);