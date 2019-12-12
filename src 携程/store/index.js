import {createStore} from 'redux'
import listn from '../listNei.json'
import listw from '../listWai.json'
import data from '../list.json'
let reducer =(state={listn,listw,countIndex:0,data:[]},action)=>{
    let newstate = {...state,data:[...state.data],listn:[...state.listn],listw:[...state.listw]}
    switch (action.type) { 
        case 'CHANGTAB':newstate.countIndex = action.index 
            return newstate 
        case 'DATA':newstate.data = action.data
            return newstate 
        default: return newstate
    }
}

let store = createStore(reducer)
window.store = store
export default store