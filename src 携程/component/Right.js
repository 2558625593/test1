import React, { Component } from 'react';
import store from '../store'
class Right extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => {
            this.setState({})
        })
    }
    render() {
        let {listn,countIndex} = store.getState()
        return (
            <div>
                <div className='right'>
                    {
                    listn[countIndex].list.map((item,index)=><span key={index}>{item}</span>)
                    }
                </div>    
            </div>
        );
    }
}

export default Right;