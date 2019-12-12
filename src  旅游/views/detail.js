/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 15:36:58
 * @LastEditTime: 2019-10-18 15:54:26
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';
class detail extends Component {
    state = {
        obj: {}
    }
    render() {
        // this.id=this.props.match.params.id;
        return (
            <div>
                <img src={this.state.obj.img} />
            </div>
        );
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        Axios.post('/detail', { id }).then(({ data }) => {
            this.setState({ obj: data })
        })
    }
}

export default detail;