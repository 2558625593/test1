import React, { Component } from 'react';
import axios from 'axios'
class detail extends Component {
    state={
        obj:{}
    }
    render() {
        return (
            <div>
                <img src={this.state.obj.img}/>
            </div>
        );
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.post('/detail',{id}).then(({data})=>{
            this.setState({obj:data})
        })
    }
}

export default detail;