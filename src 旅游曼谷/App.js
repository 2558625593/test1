import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import routerList from './router/routerList'
import RouteView  from './router/RouteView'
class App extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <>
               <BrowserRouter>
                <Provider store={store}>
                    <RouteView routes={routerList} />
                </Provider>
               </BrowserRouter> 
            </>
        );
    }
}

export default App;