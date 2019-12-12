/*
 * @Author: your name
 * @Date: 2019-10-25 10:57:25
 * @LastEditTime: 2019-10-25 14:15:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\store\index.js
 */
import {createStore} from 'redux'
import img from '../data/img.json'
import list from '../data/list.json'
/**
 * 
 * 计算总价
 */
let total=(list)=>{
    return list.reduce((total,current)=>{
         return total+=current.price*current.count
     },0)
 }
let reducer=(state={img,list,total:0,show:false,detail:{}},action)=>{
    let newstate={...state,img:[...state.img],list:[...state.list]}
    switch(action.type){
        case 'ADD':{
            newstate.list.find(item=>item.id==action.id).count++
            newstate.total=total(newstate.list)
            return newstate
        }
        case 'DEC':{
            if(newstate.list.find(item=>item.id==action.id).count>0){
                newstate.list.find(item=>item.id==action.id).count--
            }
            newstate.total=total(newstate.list)
            return newstate
        }
        case 'GET_DETAIL':{
            //打开弹框
            newstate.show=true
            //通过id获取详情
            newstate.detail= newstate.list.find(item=>item.id===action.id)
            return newstate
        }
        case 'CLOSE':{
            newstate.show=false
            return newstate
        }
        default:return newstate
    }
    return newstate
}
let store = createStore(reducer)
window.store=store
export default store