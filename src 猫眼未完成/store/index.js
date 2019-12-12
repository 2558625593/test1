import {createStore} from 'redux'

let reduce=(state={list:[]},action)=>{
    let newstate = {...state}
    switch (action.type) {
        case 'GETLIST' : newstate.list = action.data
        return newstate
        default: return newstate
    }
}

let store = createStore(reduce)
export default store