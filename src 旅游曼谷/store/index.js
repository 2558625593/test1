import { createStore } from 'redux'
import list from '../index.json'
import listn from '../listNei.json'
let reduce = (state = { listn: listn, address:'曼谷',products0: list.products0, products1: list.products1, getDetail: {}, tab: list.products0 }, action) => {
    let newstate = { ...state }
    switch (action.type) {
        case 'GET_DETAIL': newstate.getDetail = newstate.products0.find(item => item.productId == action.id)
            return newstate

        case 'GET_TAB': {
            if (action.name == '全部') {
                newstate.tab = newstate.products0
                return newstate
            } else {
                newstate.tab = newstate.products0.filter(item => item.type == action.name)
                return newstate
            }
        }
        case 'GET_SORE': {
            if (newstate.getDetail.isRecommend) {
                newstate.getDetail.peopleCount--
                newstate.getDetail.isRecommend = false
            } else {
                newstate.getDetail.peopleCount++
                newstate.getDetail.isRecommend = true
            }
        }
        default: return newstate
    }
}
let store = createStore(reduce)
window.store = store
export default store