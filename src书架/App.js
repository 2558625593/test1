import React, { Component } from 'react';
import RouterView from './router/RouterView'
import routerList from './router/routerList'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
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
                <Provider store={store}>
                  <BrowserRouter>
                    <RouterView routes={routerList}/>
                  </BrowserRouter>   
                </Provider> 
            </>
        );
    }
}

export default App;