import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class Item extends Component {
    render() {
        //console.log(this.props);
        let {author,avatar,title,summary,id,is_time_limited_free,jia} = this.props
        //console.log(this.props);
        return (
            <>
            <div className="content" onClick={()=>{
                this.props.history.push(`/detail/${id}`)
            }}>
                <div className="left">
                 <img src={avatar} />
                </div>
                <div className="right">
                   <h3>{title}</h3>
                   <p>{author}</p> 
                   <p className='con'>{summary}</p> 
                </div>
                
               
            </div>
            <div className='btn'>
                    <button onClick={()=>{
                        this.props.history.push(`/detail/${id}`)
                    }}>添加详情</button>
                    <span onClick={()=>{
                        jia(id)
                    }}>{is_time_limited_free==true?'已在书架':'加入书架'}</span>
            </div>
            </>
        );
    }
}

export default connect((state)=>{
    return {
        list:state.list
    }
},(dispatch)=>{
    return{
        jia:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        }
    }
})(withRouter(Item));