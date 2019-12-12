import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component {
    render() {
        let {img,name} = this.props.getDetail
        return (
            <div>
               <button onClick={()=>{
                   this.props.history.goBack()
               }} >返回</button>
               <img src={img}/>
               <h3>{name}</h3> 
            </div>
        );
    }
    componentDidMount(){
        let id = this.props.match.params.id
        let {getD} = this.props
        getD(id)
    }
}

export default connect((state)=>{
    return {
        getDetail:state.getDetail
    }
},(dispatch)=>{
    return {
        getD:(id)=>{
            dispatch({type:"GET_DETAIL",id})
        }
    }
})(Detail);