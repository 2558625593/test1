import { createStore } from 'redux'
import list from '../data.json'
let reduce = (state = { list: list.data, getDetail: {}, bookRack: {} }, action) => {
    let newstate = { ...state }
    switch (action.type) {
        case 'GET': newstate.list = action.list
            return newstate
        case 'GET_DETAIL': newstate.getDetail = newstate.list.find(item => item.id == action.id)
            return newstate
        case 'ADD_BOOK': {
            let obj = newstate.list.find(item => item.id == action.id)
            obj.is_time_limited_free = true
            return newstate
        }
        case 'GET_BOOK': {
            debugger
            let arr = newstate.list.filter(item => item.is_time_limited_free)
            console.log(arr);
            newstate.bookRack = arr.map(item => {
                item.checked = false
                return item
            })
        }
            return newstate
        default: return newstate
    }
}
let store = createStore(reduce)
window.store = store
export default store