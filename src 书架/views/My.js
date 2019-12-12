import React, { Component } from 'react';
import {connect} from 'react-redux'
class My extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                
            </div>
        );
    }
}

export default connect((state)=>{
    return {
        bookRack:state.bookRack
    }
},(dispatch)=>{
    return {
        getbook:()=>{
            dispatch({type:'GET_BOOK'})
        }
    }
})(My);