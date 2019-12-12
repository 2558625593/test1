/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:08:53
 * @LastEditTime: 2019-10-18 15:14:24
 * @LastEditors: Please set LastEditors
 */
import Loadable from 'react-loadable'
import React from 'react'
function Loading (){
    return <span>loading</span>
}
const withLoading=(loader,loading=Loading)=>{
 return Loadable({
    loader,
    loading
 })
}
export default withLoading