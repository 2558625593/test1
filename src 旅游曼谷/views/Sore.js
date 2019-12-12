import React, { Component } from 'react';
import {connect} from 'react-redux'
class Sore extends Component {
    state={
        soreList:[]
    }
    render() {
        let {soreList} = this.state
        return (
            <div>
                {
                    soreList.map((item,index)=><p key={index}>{item.title}</p>)
                }
            </div>
        );
    }
    componentDidMount(){
        let {products0} = this.props
        let arr = products0.filter(item=>item.isRecommend)
        this.setState({
            soreList:arr
        })
    }
}

export default connect((state)=>{
    return {
        products0:state.products0
    }
})(Sore);