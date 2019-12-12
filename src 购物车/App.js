/*
 * @Description: In User Settings Edit<>
 * @Author: your name
 * @Date: 2019-10-17 09:20:29
 * @LastEditTime: 2019-10-17 14:45:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';
import store from './store'
import Item from './components/Item'
import Total from './components/Total'
class App extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        //调取仓库数据
        let {list}=store.getState()
        return (
            <div className='shop'>
                {
                    list.map((item,index)=>{
                        return <Item key={index} {...item} index={index}/>
                    })
                }
                <Total/>
            </div>
        );
    }
    componentDidMount(){
        Axios.get('/list').then(({data})=>{
            store.dispatch({type:'GETLIST',list:data})
        })
    }
}

export default App;
