import { createStore } from 'redux'
import list from '../data.json'
let reduce = (state = { list: list.data, getDetail: {} , bookrack:[],checkAll:false }, action) => {
    let newstate = { ...state}
    switch (action.type) {
        case 'GET': newstate.list = action.data
            return newstate
        case 'ADD_BOOK': newstate.list.find(item => item.id === action.id).is_time_limited_free = true
            return newstate
        case 'GET_DETAIL': newstate.getDetail = newstate.list.find(item => item.id == action.id)
            return newstate
        case 'GET_BOOK': {
            let arr = newstate.list.filter(item=>{return item.is_time_limited_free==true})
            newstate.bookrack = arr.map(item=>{
                item.checked = false
                return item
            })
            return newstate
        }
        case 'CHANGE_CHECK':{
            newstate.bookrack.find(item=>item.id==action.id).checked = action.e.target.checked
            //newstate.checkAll = newstate.bookrack.every(item=>item.checked)
            return newstate
        }
        case 'CHANGE_ALL':{
            if(newstate.bookrack.every(item=>item.checked)){
                newstate.checkAll = true
            }else{
                newstate.checkAll = false
            }
            newstate.checkAll = !newstate.checkAll
            //newstate.bookrack.forEach(item=>item.checked === action.e.target.checked)
            if(!newstate.checkAll){
                newstate.bookrack.forEach(item=>item.checked = false) 
            }else{
                newstate.bookrack.forEach(item=>item.checked = true) 
            }
            return newstate
        }
        case 'DEL':{
            newstate.list.forEach(item => {
                if (item.checked) {
                    item.checked = false
                    item.is_time_limited_free = false
                }
            })
            newstate.bookrack=newstate.list.filter(item=>item.is_time_limited_free)
        }
        default: return newstate
    }
}
let store = createStore(reduce)
window.store = store
export default store