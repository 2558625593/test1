import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
class Item extends Component {
    render() {
        let { id, author, avatar, is_time_limited_free, summary, title ,addBook} = this.props
        return (
            <>
                <img src={avatar} className='img' />
                <h3>{title}</h3>
                <p>{author}</p>
                <button onClick={() => {
                    this.props.history.push(`/detail/${id}`)
                }}>添加详情</button>
                <button onClick={()=>{
                    addBook(id)
                }}>{is_time_limited_free ? '已在书架' : '加入书架'}</button>
                <p>{summary}</p>
            </>
        );
    }
}

export default connect(null,(dispatch)=>{
    return {
        addBook:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        }
    }
})(withRouter(Item));