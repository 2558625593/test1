import React, { Component } from 'react';
import { connect } from 'react-redux'
class Detail extends Component {
    render() {
        let { soreFn } = this.props
        let { productId, imgUrl, title, isRecommend, peopleCount } = this.props.getDetail

        return (
            <>
                <img src={imgUrl} className='img' />
                <p>{title}</p>
                <button onClick={() => {
                    soreFn(null, productId)
                }} className={isRecommend?'active':null}>{peopleCount}人<span>{isRecommend ? '取消收藏' : '收藏'}</span></button>
                <button onClick={() => {
                    this.props.history.goBack()
                }}>返回</button>
            </>
        );
    }
    componentDidMount() {
        let { get } = this.props
        let { id } = this.props.match.params
        get(id)
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
        soreFn: (id) => {
            dispatch({ type: 'GET_SORE', id })
        }
    }
})(Detail);