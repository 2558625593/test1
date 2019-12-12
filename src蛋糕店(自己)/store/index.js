import { createStore } from 'redux'
import list from '../list.json'

function sum(list) {
    let sum = 0
    list.forEach(item => {
        sum += item.content * item.money
    })
    return sum
}
// let sum = (list) => {
//     return list.reduce((title, item) => {
//         return title += item.content * item.money
//     }, 0)
// }
let reduce = (state = { list: list, getDetail: {}, sum: 0 }, action) => {
    let newstate = { ...state }
    switch (action.type) {
        case 'GET': newstate.list = action.list
            return newstate
        case 'GET_DETAIL': {
            newstate.getDetail = newstate.list.find(item => item.id == action.id)
            return newstate
        }
        case 'GET_JIA': {
            newstate.list.find(item => item.id == action.id).content++
            //newstate.sum += newstate.list.find(item=>item.id==action.id).content*newstate.list.find(item=>item.id==action.id).money
            newstate.sum = sum(newstate.list)
            return newstate
        }
        case 'GET_JIAN': {
            newstate.list.find(item => item.id == action.id).content > 0 && newstate.list.find(item => item.id == action.id).content--
            newstate.sum = sum(newstate.list)
            return newstate
        }
        default: return newstate
    }
}
let store = createStore(reduce)
window.store = store
export default store