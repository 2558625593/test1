import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from '../component/Item'
class Home extends Component {
    render() {
        let { list } = this.props
        return (
            <>
            <button onClick={()=>{
                this.props.history.push('/my')
            }}>我的</button>
            <div>
                
                {
                    list.map((item, index) => <Item key={index} {...item} />)
                }
            </div>
            </>
        );
    }
}

export default connect((state) => {
    return {
        list: state.list
    }
})(Home);