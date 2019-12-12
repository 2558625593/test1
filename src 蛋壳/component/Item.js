import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let {img,title,type,id} = this.props
        return (
            <div className="item" onClick={()=>{
                this.props.history.push('/detail/'+id)
            }}>
                <img src={img} />
                <div className="right">
                    <h4>{title}</h4>
                    <p>{type===0&&'整租'||type===1&&'合租'||type===2&&'月租'}</p>
                </div>
            </div>
        );
    }
}

export default withRouter(Item);