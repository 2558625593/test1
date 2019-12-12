import React, { Component } from 'react';
import { connect } from 'react-redux'
class BookRack extends Component {
    render() {
        let { bookrack, changeCheck, checkAll ,del} = this.props
        return (
            <div>
                {
                    bookrack.map((item, index) => <p key={index}><span><input type="checkbox" checked={item.checked} onChange={(e) => {
                        changeCheck(item.id, e)
                    }} /></span>{item.title}</p>)

                }
                <input type='checkbox' checked={this.checkAll} onChange={checkAll} />全选 <span onClick={del}>删除</span>
            </div>
        );
    }
    componentDidMount() {
        let { getBook ,del} = this.props
        getBook()
        del()
    }
}

export default connect((state) => {
    return {
        list: state.list,
        bookrack: state.bookrack,
        checkAll: state.checkAll
    }
}, (dispatch) => {
    return {
        getBook: () => {
            dispatch({ type: 'GET_BOOK' })
        },
        changeCheck: (id, e) => {
            dispatch({ type: 'CHANGE_CHECK', id, e })
        },
        checkAll: () => {
            dispatch({ type: 'CHANGE_ALL' })
        },
        del:()=>{
            dispatch({type:'DEL'})
        }
    }
})(BookRack);