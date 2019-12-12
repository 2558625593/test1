/*
 * @Author: your name
 * @Date: 2019-10-22 10:44:23
 * @LastEditTime: 2019-10-22 11:12:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\views\Address.js
 * 把store的state以及dispatch的方法 放在props上
 * react-redux
 * Provider 提供者 store={store}
 * connect(mapStateToProps,mapDispathToProps)(组件)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
class Address extends Component {
    render() {
        console.log(this.props)
        let { cityList,changeCity } = this.props
        return (
            <div className="city">
                {
                    cityList.map((item, index) => <span key={index} onClick={
                        ()=>{
                            changeCity(item.id)  
                            this.props.history.push(`/home/movie/hot`)
                        }
                    }>{item.name}</span>)
                }
            </div>
        );
    }
}

export default connect((state) => {
    return {
        cityList: state.cityList
    }
},(dispatch)=>{
    return {
        changeCity:(id)=>{
            dispatch({
                type:'CHANGE_CITY',
                id
            })
             
        }
    }
})(Address);