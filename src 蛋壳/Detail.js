import React, { Component } from 'react';
import axios from 'axios'
class Detail extends Component {
    state={
        obj:{}
    }
    render() {
        let {obj} = this.state
        return (
            <div className="detail">
                <img src={obj.img}/>
                <p>{obj.title} {obj.price}元/月</p> 
                <p onClick={()=>{
                    this.props.history.push('/layout/my')
                }}>收藏</p>
            </div>
        );
    }
    componentDidMount() {
        axios.post('/detail', { id: this.props.match.params.id }).then(({ data }) => {
            this.setState({
                obj: data
            })
        })
    }
}

export default Detail;