/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 09:26:35
 * @LastEditTime: 2019-10-17 15:38:50
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers } from 'redux'
import React from 'react'
// import listJson from '../list.json'
//定义一个计算函数，专门求和  reduce  forEach
let total = (list) => {
    return list.reduce((total, item) => {
        if (item.flag) {
            total += item.price * item.num
        }
        return total

    }, 0)
}
let count = (list) => {
    return list.reduce((total, item) => {
        if (item.flag) { total += item.num }
        return total
    }, 0)
}


let reducer = (state = { list: [], total: 0, count: 0 }, actions) => {
     //数组的深拷贝
    let newstate = {...state,list: [...state.list] }
    switch (actions.type) {
        case 'GETLIST': newstate.list = actions.list
            return newstate;
        case 'ADD': {
            newstate.list.find(item => item.id === actions.id).num++
            //求和
            newstate.total = total(newstate.list)
            newstate.count = count(newstate.list)
            return newstate
        }

        case 'DEC': {
            newstate.list.find(item => item.id === actions.id).num > 0 && newstate.list.find(item => item.id === actions.id).num--
            //求和
            newstate.total = total(newstate.list)
            newstate.count = count(newstate.list)
            return newstate
        }
        case 'CHANGE_FLAG': {
            newstate.list.find(item => item.id === actions.id).flag = actions.flag
            //求和
            newstate.total = total(newstate.list)
            newstate.count = count(newstate.list)
            return newstate
        }
        default: return newstate
    }
}
let store = createStore(reducer)
window.store = store
export default store
