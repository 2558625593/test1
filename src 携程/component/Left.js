import React, { Component } from 'react';
import store from '../store'
class Left extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let{listn,countIndex} = store.getState()
        //console.log(listn);
        return (
            <>
                <div className='left'>
                {listn.map((item,index)=>{
                    return <p key={index} className={index===countIndex?'active':null} onClick={this.changeTab.bind(null,index)}>{item.type}</p>
                })}
                </div>
            </>
        )
    }
    changeTab=(index)=>{
        store.dispatch({type:'CHANGTAB',index})
    }
}

export default Left;