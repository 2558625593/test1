import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() { 
        let {img,id} = this.props
        //console.log(this.props);
        return (
            <div className="item" onClick={()=>{
                this.props.history.push(`/detail/${id}`)
            }}>
                <img src={img}/>
            </div>
        );
    }
}

export default withRouter(Item);