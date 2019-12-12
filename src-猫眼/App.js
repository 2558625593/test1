/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-19 10:39:42
 * @LastEditTime: 2019-10-22 10:54:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Detail from './views/Detail'
import RouterView from './router/RouterView'
import MyHeader from './components/MyHeader'
import routerList from './router/routerList'
import store from './store'
import { Provider } from 'react-redux'
class App extends Component {
    // constructor(props) {
    //     super(props)
    //     // store.subscribe(()=>{
    //     //     this.setState({})
    //     // })
    // }
    render() {
        console.log(this.props)
        return (
            <div className='catmoview'>
                <Provider store={store}>
                    <BrowserRouter>
                        <MyHeader />
                        {/* <Switch>
                    <Route path='/detail/:id' render={(props)=>{
                        console.log(props)
                        return  <Detail {...props}/>
                    }}></Route>
                </Switch> */}
                        <div className='main'>
                            <RouterView routes={routerList} />
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;