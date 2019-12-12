/*
 * @Author: your name
 * @Date: 2019-10-22 15:01:54
 * @LastEditTime: 2019-10-23 17:31:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /e:\班级授课\1706E\myreact\src\views\My.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
class My extends Component {

    render() {
        let { myList, checkAll, changeCheck, changeAll,delFn } = this.props
        console.log(myList)
        return (
            <div>
                {
                    myList.map((item, index) => <p key={index}>
                        <input type='checkbox' checked={item.checked} onChange={(e) => {
                            // item.checked=e.target.checked
                            changeCheck(item.id, e)
                        }} />{item.title}
                    </p>)
                }
                <p>
                    <input type='checkbox' checked={checkAll} onChange={(e) => {
                        changeAll(e)
                    }} /><button>全选</button>
                    <button onClick={()=>{delFn()}}>删除</button>
                </p>
            </div>
        );
    }
    componentDidMount() {
        this.props.getList()
    }

}

export default connect((state) => {
    return {
        myList: state.myList,
        checkAll: state.checkAll
    }
}, (dispatch) => {
    return {
        getList: () => {
            dispatch({ type: 'GET_MYLIST' })
        },
        /**
         * 修改checkbox值
         */
        changeCheck: (id, e) => {
            dispatch({ type: 'CHANGE_CHECK', id, e })
        },
        /**
         * 点击全选按钮
         */
        changeAll: (e) => {
            dispatch({ type: 'CHANGE_CHECKALL',e })
        },
        /**
         * 删除
         */
        delFn:()=>{
            dispatch({
                type:'DEL'
            })
        }
    }
})(My)