/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 14:19:57
 * @LastEditTime: 2019-10-22 11:41:25
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cityList from '../data/city.json'
let reducer = (state = { list: [],cityList:cityList,cityname:'北京' ,searchList:[]}, action) => {

    switch (action.type) {
        case 'GET_LIST': state.list = action.data
            return { ...state }
        case 'ZAN': state.list.find(item=>item.id==action.id).showst++
        return {...state}
        case 'CHANGE_CITY':{
            let obj=state.cityList.find(item=>item.id==action.id)
            state.cityname=obj.name
            return { ...state }
        }
        case 'SEARCH':{
           state.searchList= state.list.filter(item=>item.nm.includes(action.keyword))
           console.log(state)
           return {...state}
        }
        default: return { ...state }
    }
}

let store = createStore(reducer, applyMiddleware(thunk))
window.store = store
export default store