import React from 'react'
import Loadable from 'react-loadable'
const Loading =()=>{
    return <span>loading</span>
}
function withLoading(loader,loading=Loading){
    return  Loadable({
        loader,
        loading  
    })
    }
export default withLoading