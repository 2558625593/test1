/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:44:10
 * @LastEditTime: 2019-10-16 11:33:05
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import MyFooter from '../components/MyFooter'
import withLoading from '../util/withLoading'
// import Home from './layout/Home'
// import List from './layout/List'
// import My from './layout/My'
// import Lease from './layout/Lease'
// 懒加载

// const Home = Loadable({
//     loader: () => import('./layout/Home'),
//     loading: Loading
//   });
//   const List = Loadable({
//     loader: () => import('./layout/List'),
//     loading: Loading
//   });
//   const My = Loadable({
//     loader: () => import('./layout/My'),
//     loading: Loading
//   });
//   const Lease = Loadable({
//     loader: () => import('./layout/Lease'),
//     loading: Loading
//   });
const Lease = withLoading(() => import('./layout/Lease'))
const My = withLoading(() => import('./layout/My'))
const List = withLoading(() => import('./layout/List'))
const Home = withLoading(() => import('./layout/Home'))
class Layout extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='layout'>
                {/* 层 */}
                <div className='layout-main'>
                    <Switch>
                        <Route path='/layout/home' component={Home} />
                        <Route path='/layout/list' component={List} />
                        <Route path='/layout/my' component={My} />
                        <Route path='/layout/lease' component={Lease} />
                    </Switch>
                </div>
                <MyFooter />
            </div>
        );
    }
}

export default Layout;