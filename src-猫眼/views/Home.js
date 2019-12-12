/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-21 11:39:07
 * @LastEditTime: 2019-10-21 14:43:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import MyFooter from '../components/MyFooter'
import {Switch,Route} from 'react-router-dom'
import Movie from './home/Movie'
import Cinema from './home/Cinema'
import My from './home/My'
import RouterView from '../router/RouterView'
class Home extends Component {
    render() {
        console.log(this.props)
        let {routes}=this.props
        return (
            <>
                <div className='home-main'>
                    {/* <Switch>
                        <Route path='/home/movie' component={Movie}></Route>
                        <Route path='/home/cinema' component={Cinema}></Route>
                        <Route path='/home/my' component={My}></Route>
                    </Switch> */}
                    <RouterView routes={routes}/>
                </div>
                <MyFooter/>
            </>
        );
    }
}

export default Home;