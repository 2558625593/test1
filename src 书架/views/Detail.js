import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component {
    render() {
        let {avatar,author,title,is_time_limited_free,id} = this.props.getDetail
        let {addBook} = this.props
        console.log(this.props);
        return (
            <div>
                <img src={avatar}/>
                <h3>{title}</h3>
                <p>{author}</p>
                <button onClick={()=>{
                    this.props.history.goBack()
                }}>返回</button>
                <button onClick={()=>{
                    addBook(id)
                }}>{is_time_limited_free==true ? '已在书架' : '加入书架'}</button>
            </div>
        );
    }
    componentDidMount(){
        let {getD} = this.props
        let {id} = this.props.match.params
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
            dispatch({type:'GET_DETAIL',id})
        },
        addBook:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        }
    }
})(Detail);