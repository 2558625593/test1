import React, { Component } from 'react';

class Myseach extends Component {
    render() {
        let {item,changeShow} = this.props
        console.log(this.props);
        return (
            <div className="items">
                <span onClick={()=>{changeShow(0)}}>整/合租</span>|
                <span onClick={()=>{changeShow(1)}}>位置</span>|
                <span onClick={()=>{changeShow(2)}}>价格</span>|
                <span onClick={()=>{changeShow(3)}}>更多</span>
            </div>
        );
    }
}

export default Myseach;