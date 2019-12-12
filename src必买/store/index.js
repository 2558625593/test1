/*
 * @Author: your name
 * @Date: 2019-10-25 10:57:25
 * @LastEditTime: 2019-10-28 11:27:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\store\index.js
 */
import{createStore} from 'redux'
import listJson from '../data/index.json'
let reducer=(state={product0:listJson.products0,product1:listJson.products1,detail:{}},action)=>{
    let newstate={...state,product0:[...state.product0],product1:[...state.product1]}
    switch(action.type){
        case 'DETAIL':{
            newstate.detail=newstate.product0.find(item=>item.productId==action.id)
            return newstate
        }
        case 'STORE':{ //收藏功能  
            //判断该增还是该减，取决于isRecommend
            if(newstate.detail.isRecommend){
                newstate.detail.peopleCount--
                newstate.detail.isRecommend=false
            }else{
                newstate.detail.peopleCount++
                newstate.detail.isRecommend=true 
            }
            return newstate
        }
        default:return newstate
    }
}
let store= createStore(reducer)
window.store=store
export default store
