import React, { Component } from 'react';
import { connect } from 'react-redux'
import Item from '../component/Item'
import axios from 'axios'
class Home extends Component {
    render() {
        //console.log(this.props);
        let { list } = this.props
        console.log(list);
        
        return (
            <div className="item">
                <button onClick={()=>{
                    this.props.history.push('/bookrack')
                }}>我的</button>
                {
                    list.map((item, index) => <Item key={index} {...item} />)
                }
            </div>
        );
    }
    // componentDidMount() {
    //     let { gete } = this.props
    //     axios.get('/myList').then(({ data }) => {
    //         //console.log(data);    
    //         gete(data.data)
    //     })
    // }
}
export default connect((state) => {
    return {
        list: state.list
    }
})(Home);