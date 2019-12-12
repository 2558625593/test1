/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 11:27:29
 * @LastEditTime: 2019-10-18 15:32:45
 * @LastEditors: Please set LastEditors
 */
import { createStore } from 'redux'
import listn from '../data/listNei.json'
import listw from '../data/listWai.json'
let reducer = (state = { listn: listn, listw: listw, currentIndex: 0,datas:[] }, actions) => {
    let newstate = { ...state,datas:[...state.datas], listn: [...state.listn], listw: [...state.listw] }
    switch (actions.type) {
        case 'CHANG_TAB':newstate.currentIndex=actions.index
        return newstate
        case "DATA":newstate.datas=actions.data
        return newstate
        default: return newstate
    }
}
let store = createStore(reducer)
window.store = store
export default store