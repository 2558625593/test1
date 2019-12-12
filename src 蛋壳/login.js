import React, { Component } from 'react';

class login extends Component {
    state={
        user:'',
        pwd:''
    }
    render() {
        let {user,pwd} = this.state
        return (
            <div>
                <p><input  value={user}  onChange={(e)=>{
                    this.setState({
                        user:e.target.value
                    })
                }}/></p>
                <p><input type="password" value={pwd} onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value
                    })
                }}/></p>
                <button onClick={()=>{
                    localStorage.user=user
                    this.props.history.goBack()
                }}>按钮</button>
            </div>
        );
    }
}

export default login;