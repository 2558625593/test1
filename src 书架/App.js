import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/RouterView'
import routeList from './router/routeList'
class App extends Component {
  constructor(props){
    super(props)
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render() {
    return (
      <div>
        <Provider store={store}>
            <BrowserRouter>
              <RouterView routes={routeList} />
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;