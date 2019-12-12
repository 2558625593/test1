import React, { Component } from 'react';
import store from '../../store'
import {connect} from 'react-redux'
import axios from 'axios'
import Item from './Item'
class Hot extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {list} = store.getState()
        console.log(list);
        return (
            <div>
                {
                    list.length&&list.map((item,index)=><Item key={index} {...item} />)
                }
            </div>
        );
    }
    componentDidMount(){
        console.log(this.props);
        
        axios.get('/myList').then(({data})=>{
            store.dispatch({type:'GETLIST',data})
        })
    }
}

export default connect((state)=>{
    return 
})(Hot);