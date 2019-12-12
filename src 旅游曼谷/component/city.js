import React, { Component } from 'react';
import {connect} from 'react-redux'
class city extends Component {
    state={
        currentIndex:0
    }
    render() {
        let {currentIndex} = this.state
        let {listn} = this.props
        
        return (
            <div className='centent'>
                <div className='left'>
                    {
                        listn.map((item,index)=><p key={index} className={currentIndex==index?'active':null} onClick={this.adFn.bind(null,index)}>{item.type}</p>)
                    }
                </div>
                <div className='right'>
                    {
                        listn[currentIndex].list.map((item,index)=><p key={index} onClick={this.cityFn}>{item}</p>)
                    }
                </div>
            </div>
        );
    }
    adFn=(index)=>{
        this.setState({
            currentIndex:index
        })
    }
    cityFn=()=>{

    }
}

export default connect((state)=>{
    return {
        listn:state.listn
    }
})(city);