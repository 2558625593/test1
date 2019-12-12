import React, { Component } from 'react';
import {Route,NavLink,Redirect} from 'react-router-dom'
import Contry from './views/Contry';
import Abroad from './views/Abroad';
class Traive extends Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={()=>{
                        this.props.history.goBack()
                    }}>返回</button>
                </div>
                <div className="ton">
                   <NavLink to="/traive/contry">国内</NavLink>
                <NavLink to="/traive/abroad">国外</NavLink> 
                </div>
                <Route path="/traive/contry" component={Contry} />
                <Route path="/traive/abroad" component={Abroad} />
                <Redirect to="/traive/contry" />
            </div>
        );
    }
}

export default Traive;