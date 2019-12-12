/*
 * @Author: your name
 * @Date: 2019-10-22 15:14:50
 * @LastEditTime: 2019-10-22 15:46:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\utils\withLoading.js
 */
import React from 'react'
import Loadable from 'react-loadable'
function Loading (){
    return <span>loading</span>
}
export default function withLoading(loader,loading=Loading){
  return  Loadable({
        loader,
        loading
    })
}