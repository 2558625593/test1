/*
 * @Author: your name
 * @Date: 2019-10-26 09:12:09
 * @LastEditTime: 2019-10-28 11:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\list\Buy.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from '../../components/Item'
class Buy extends Component {
    state = {
        tablist: ['全部', '商圈', '商超'],
        list: [],
        currentIndex: 0
    }
    render() {
        console.log(this.props)
        let { tablist, currentIndex, list } = this.state
        let { product0 } = this.props
        return (
            <>
                <p className='tabbar'>
                    {
                        tablist.map((item, index) => <span className={currentIndex === index ? 'active' : ''} key={index} onClick={this.tabFn.bind(null, index, item)}>{item}</span>)
                    }
                </p>
                <div className='item_list'>
                    {
                        list.length ? list.map((item, index) => <Item {...item} key={index} />) : <span>暂无数据</span>
                    }
                </div>
            </>
        );
    }
    componentDidMount() {
        this.setState({
            list: this.props.product0
        })
    }
    /**
     * tab切换
     * 路由传参
     * 样式变
     * 数据变化
     */
    // tabFn = (index, item) => {
    //     this.setState({
    //         currentIndex: index
    //     })
    //     // // 路由传参
    //     // this.props.history.push({
    //     //     pathname: '/home/buy',
    //     //     state: { type: item }
    //     // })
    //     // //路由中找state
    //     // let keyword = this.props.location.state.type
    //     let keyword=item
    //     if (keyword === '全部') {
    //         this.setState({
    //             list: this.props.product0
    //         })
    //     } else {
    //         let arr = this.props.product0.filter(item => item.tab === keyword)
    //         this.setState({
    //             list: arr
    //         })
    //     }

    // }
    tabFn = (index, name) => {
        this.setState({
            currentIndex: index
        })
        if (name === '全部') {
            this.setState({
                list: this.props.product0
            })
        } else {
            let { product0 } = this.props
            let arr = product0.filter(item => item.tab == name)
            this.setState({
                list: arr
            })
        }
    }
}

export default connect((state) => {
    return {
        product0: state.product0
    }
})(Buy);