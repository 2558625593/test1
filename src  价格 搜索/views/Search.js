/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-19 09:47:43
 * @LastEditTime: 2019-10-19 10:13:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from "../store"
class Search extends Component {
    state = {
        keyword: ''
    }
    render() {
        let { keyword } = this.state
        let { searchList } = store.getState()
        return (
            <div>
                <div><input type='text' value={keyword} onChange={(e) => {
                    this.setState({
                        keyword: e.target.value
                    })
                }} /><button onClick={this.searchFn}>搜索</button></div>
                {
                    searchList.map((item,index)=><img  key={index} src={item.img} />)
                }
            </div>
        );
    }
    //模糊查询
    searchFn = () => {
        debugger
        let { keyword } = this.state
        store.dispatch({ type: 'SEARCH', keyword })
    }
}

export default Search;