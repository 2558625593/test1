import React, { Component } from 'react';
import store from './store/index'
import Item from './Item'
import {connect} from 'react-redux'
class App extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {list,id,total,count} = store.getState();
        //console.log(store.getState()); 
        //let {list,id,total,count} = this.props     
        return (
            <div>
                {list.map((item,index)=><Item key={index} total={total} count={count} {...item} add={this.add.bind(null,item.id)} dec={this.dec.bind(null,item.id)}/>)} 
                <p>总计:{total}</p> <p>总个数:{count}</p>
            </div>
        );  
    }
    add=(id)=>{
        store.dispatch({type:'ADD',id})
    }
    dec=(id)=>{
        store.dispatch({type:'DEC',id})
    }
    
}
// let mapStateToProps=(state)=>{
//     return {
//         list:state.list
//     }
// }
// let mapDispatchToProps=(dispatch)=>{
//     return {
//         getList:(data)=>{
//             dispatch({type:'APP',list:data})
//             dispatch({type:'DEC',list:data})
//         }
//     }
// }
//export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App