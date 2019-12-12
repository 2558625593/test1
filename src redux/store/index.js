//1、引入redux
import {createStore} from 'redux'
import listJson from '../list.json'
//2、常见reducer函数
let total = (list)=>{
    return list.reduce((total,count)=>{
        return total+=count.price*count.num
    },0)
}

let count =(list)=>{
    return list.reduce((total,count)=>{
        return total+=count.num
    },0)
}

let reducer = (state={list:listJson,total:0,count:0},action)=>{
    //console.log('reducer',action);
    let newstate = {...state,list:[...state.list]}
    switch (action.type) {
        case "ADD":newstate.list.find(item=>item.id===action.id).num++
                    newstate.total = total(newstate.list)
                    newstate.count = count(newstate.list)
            return newstate
        case "DEC":{
            newstate.list.find(item=>item.id===action.id).num>0&&newstate.list.find(item=>item.id===action.id).num--
            newstate.total = total(newstate.list)
            newstate.count = count(newstate.list)
        }
            return newstate
        case "GETLIST":newstate.list=listJson
            return newstate
        default:return newstate
    }
}
//3、创建仓库
let store = createStore(reducer)
export default store
//4、将仓库挂载到window上，便于查看
window.store = store
console.log(store);
