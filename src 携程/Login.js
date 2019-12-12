import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    localStorage.user='huruibin'
                    this.props.history.goBack()
                }}>点击</button>
            </div>
        );
    }
}

export default Login;