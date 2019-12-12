import React, { Component } from 'react';

class Login extends Component {
    state={
        user:'',
        pwd:''
    }
    render() {
        let {user,pwd} = this.state 
        return (
            <div>
                <input type='text' value={user} onChange={(e)=>{
                    this.setState({
                        user:e.target.value
                    })
                }} />
                <button onClick={()=>{
                    localStorage.user = user
                    this.props.history.goBack()
                }}>添加</button>
            </div>
        );
    }
}

export default Login;