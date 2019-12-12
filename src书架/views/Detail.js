import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import store from '../store'
class Detail extends Component {
    state = {
        obj: {}
    }
    render() {
        // console.log(this.state);
        // console.log(this.props);
        let { author, avatar, title, is_time_limited_free, id } = this.props.getDetail
        let {jia} =this.props
        console.log(this.props);
        return (
            <div>
                <img src={avatar} />
                <p>{author}</p>
                <h3>{title}</h3>
                <span onClick={()=>{
                        jia(id)
                    }}>{is_time_limited_free==true?'已在书架':'加入书架'}</span>
                <button onClick={() => {
                    this.props.history.goBack()
                }}>返回</button>
            </div>
        )
    }
    componentDidMount() {
        //let id = this.props.match.params.id
        // axios.post('/detail',{id}).then((listjson)=>{
        //     this.setState({
        //         obj:listjson.data
        //     },()=>{
        //         console.log(this.state.obj);
        //     })
        // })
        let { get } = this.props
        get(this.props.match.params.id)
    }
}
export default connect((state) => {
    return {
        getDetail: state.getDetail
    }
}, (dispatch) => {
    return {
        get: (id) => {
            dispatch({ type: 'GET_DETAIL', id })
        },
        jia:(id)=>{
            dispatch({type:'ADD_BOOK',id})
        }
    }
})(Detail);