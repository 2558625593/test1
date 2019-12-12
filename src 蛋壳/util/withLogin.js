/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:31:59
 * @LastEditTime: 2019-10-16 10:39:15
 * 高阶组件 一个函数 参数是组件 返回一个新组件
 */
import React, { Component } from 'react'
function withLogin(Comp) {
    class NewComp extends Component {
        componentWillMount() {
            // 判断本地存储是否有user
            if(!localStorage.user){
                console.log(this.props)
                this.props.history.push('/login')
            }
        }
        render() {
            return <Comp />
        }
    }
    return NewComp

}
export default withLogin
