import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom'
import Movie from './layout/Movie'
import MyFooter from '../component/myFooter';
import Cinema from './layout/Cinema';
import My from './layout/My';
class Layout extends Component {
    render() {
        return (
            <>
                <Route path='/layout/movie' component={Movie} />
                <Route path='/layout/cinema' component={Cinema} />
                <Route path='/layout/my' component={My} /> 
                <MyFooter/>
            </>
        );
    }
}

export default Layout;