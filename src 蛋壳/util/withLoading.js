/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 11:25:06
 * @LastEditTime: 2019-10-16 11:33:45
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import Loadable from 'react-loadable'
const Loading=()=>{
    return <span>loading</span>
}

function withLoading(loader,loading=Loading){
  return  Loadable({
      loader,
      loading  
    })
}
export default withLoading