/*
 * @Author: your name
 * @Date: 2019-10-22 14:58:15
 * @LastEditTime: 2019-10-23 17:36:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\store\index.js
 */
import mylist from '../data/list.json'
import { createStore } from 'redux'
let reducer = (state = { list: mylist.data, detail: {}, myList: [], checkAll: false }, action) => {

    let newstate = { ...state, list: [...state.list], myList: [...state.myList] }

    switch (action.type) {
        case 'GET_LIST': newstate.list = action.data
            return newstate
        case 'ADD_BOOK': {
            /**
             * 加入书架,通过id查找对应的数据obj，然后设置is_time_limited_free为true
             */
            let obj = newstate.list.find(item => item.id === action.id)
            obj.is_time_limited_free = true
            return newstate
        }
        case 'GET_DETAIL': {
            newstate.detail = newstate.list.find(item => item.id == action.id)
            return newstate
        }
        case 'GET_MYLIST': {
            /**
             * 过滤
             * 加入属性--checkbox
             */
            let arr = newstate.list.filter(item => item.is_time_limited_free)
            newstate.myList = arr.map(item => {
                item.checked = false
                return item
            })
            return newstate
        }
        case 'CHANGE_CHECK': {
            //e.target.checked
            newstate.myList.find(item => item.id === action.id).checked = action.e.target.checked
            // 跟踪checkAll
            newstate.checkAll = newstate.myList.every(item => item.checked)
            return newstate
        }
        case 'CHANGE_CHECKALL': {
            //点击全选
            newstate.checkAll = action.e.target.checked
            newstate.myList.forEach(item => item.checked = action.e.target.checked)
            return newstate
        }
        case 'DEL': {
            /**
             * 删除功能
             * 将list修改，因为列表页详情页需要状态改变
             * 重新获取myList，因为my页面要改变成新数组
             */
            newstate.list.forEach(item => {
                if (item.checked) {
                    item.checked = false
                    item.is_time_limited_free = false
                }
            })
            newstate.myList=newstate.list.filter(item=>item.is_time_limited_free)
            return newstate

        }
        default: return newstate
    }
}
let store = createStore(reducer)
window.store = store
export default store