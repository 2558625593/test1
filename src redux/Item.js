import React, { Component } from 'react';

class Item extends Component {
    render() {
        let {title,price,num,add,id,dec,total,count} = this.props
        //console.log(this.props);
        return (
            <div>
                <input type="checkbox"/>
                <span>{title}</span> <span>{price}</span>  <button onClick={dec.bind(null,id)}>-</button>{num}<button onClick={add.bind(null,id)}>+</button>
            </div>
        );
    }
}

export default Item;