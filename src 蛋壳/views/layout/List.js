/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:49:33
 * @LastEditTime: 2019-10-16 09:10:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import MySearchBar from '../../components/MySearchBar'
import Dialog from '../../components/Dialog'
import Child0 from '../../components/dialog/Child0'
import Axios from 'axios';
// import Item from '../../components/Item'
import MyHeader from '../../components/MyHeader'
// import LazyLoad from 'react-lazyload'
import Loadable from 'react-loadable'
const Loading = ()=>{
    return <span>loading</span>
}
const Item = Loadable({
    loader:()=>import('../../components/Item'),
    loading:Loading,
    timeout: 1000
})
class List extends Component {
    state = {
        show: false,
        num: 0,
        list: [],
        data0: [
            {
                type: null,
                txt: '不限'
            },
            {
                type: 0,
                txt: '整租'
            },
            {
                type: 1,
                txt: '合租'
            },
            {
                type: 2,
                txt: '月租'
            }
        ]
    }
    render() {
        let { show, num, data0, list } = this.state
        return (
            <div className='list'>
                <MyHeader />
                <MySearchBar changeShow={this.changeShow} />
                {
                    list.map((item, index) => <Item {...item} key={index}/>)
                }

                {
                    show && num === 0 && <Dialog><Child0 setList={this.setList} data={data0} /></Dialog> ||
                    show && num === 1 && <Dialog><h1>111</h1></Dialog> ||
                    show && num === 2 && <Dialog><h1>2222 </h1></Dialog> ||
                    show && num === 3 && <Dialog><h1>3333 </h1></Dialog>
                }
            </div>
        );
    }
    // 选择后
    setList = (list) => {
        this.setState({
            list,
            show: false
        })
    }
    // 控制弹框显隐
    changeShow = (num) => {
        // 判断再次传入的num跟之前的是否一致
        if (this.state.num === num) {
            this.setState({
                show: !this.state.show,
                num: num
            })
        } else {
            this.setState({
                num: num
            })
        }

    }
    componentDidMount() {
        Axios.get('/list').then(({ data }) => {
            this.setState({
                list: data
            })
        })
    }
}

export default List;