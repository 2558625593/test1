import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class Item extends Component {
    render() {
        let { name, money, img, id, content, jia,jian,sum} = this.props
        // console.log(this.props.id);      
        return (
            <div className='item'>
                <img src={img} onClick={() => {
                    this.props.history.push(`/detail/${id}`)
                }} />
                <h3>{name}</h3>
                <p>{money}</p>
                <button onClick={()=>{
                    jian(id)
                }}>-</button>{content}<button onClick={() => {
                    jia(id)
                }}>+</button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        sum:state.sum
    }
}, (dispatch) => {
    return {
        jia: (id) => {
            dispatch({ type: 'GET_JIA', id })
        },
        jian:(id)=>{
            dispatch({type:'GET_JIAN',id})
        },

    }
})(withRouter(Item));