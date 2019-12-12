/*
 * @Description: In User Settings Edit<>
 * @Author: your name
 * @Date: 2019-10-17 09:20:29
 * @LastEditTime: 2019-10-17 16:50:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';
import Item from './components/Item'
import Total from './components/Total'
//引入react-redux
import { connect } from 'react-redux'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //调取仓库数据
        console.log(this.props)
        let { list } = this.props
        return (
                <div className='shop'>
                    {
                        list.map((item, index) => {
                            return <Item key={index} {...item} index={index} />
                        })
                    }
                    <Total />
                </div>
        );
    }
    componentDidMount() {
        Axios.get('/list').then(({ data }) => {
            // store.dispatch({ type: 'GETLIST', list: data })
            this.props.getList(data)
        })
    }
    // getList=(list)=>{
    //     store.dispatch({ type: 'GETLIST', list: list })
    // }
}
// 将state映射到props
let mapStateToProps=(state)=>{
    console.log(state)
    return {
        list:state.list
    }
}
//将方法映射到props上
let mapDispatchToProps=(dispatch)=>{
    return {
       getList:(data)=>{
          dispatch({ type: 'GETLIST', list: data })
       } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
