import React, { Component } from 'react';
import store from '../store'
import axios from 'axios'
import Item from './Item'
class Home extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {data} = store.getState()
        console.log(data); 
        return (
            <>
            <div className="lv">
                <span onClick={()=>{
                    this.props.history.push('/traive')
                }}>旅游</span>
            </div>
            <div className='list'>
                {
                    data.map((item,index)=><Item key={index} {...item} />)
                }
            </div>
            </>
        )
    }
    componentDidMount(){
        axios.get('/myList').then(({data})=>{
            console.log(data);
            
            store.dispatch({type:'DATA',data:data.data})
        })
    }
}

export default Home;