/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:22:02
 * @LastEditTime: 2019-10-17 11:27:55
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Axios from 'axios';

class BaiDuMap extends Component {
    render() {
        return (
            <div className='map'>
                <div ref='container' className='container'></div>
                <button onClick={this.getLocation}>点击获取当前位置</button>
                <button onClick={this.getWeather}>点击获取当前城市的天气</button>
            </div>
        );
    }
    componentDidMount() {
        console.log(window.BMap)
        this.map = new window.BMap.Map(this.refs.container);
        let point = new window.BMap.Point(116.306771, 40.047299)
        this.map.centerAndZoom(point, 10);
        let marker = new window.BMap.Marker(point);        // 创建标注    
        this.map.addOverlay(marker);                     // 将标注添加到地图中 
        this.map.enableScrollWheelZoom();
    }
    getLocation=()=>{
        let _this=this
        function myFun(result){
            var cityName = result.name;
            _this.cityName=cityName
            console.log(result)
            // _this.map.setCenter(cityName);
            alert("当前定位城市:"+cityName);
        }
        var myCity = new window.BMap.LocalCity();
        myCity.get(myFun);
    }
    getWeather=()=>{
    Axios.get('/api?format=2&cityname='+this.cityName+'&key=06e8705c0bafcafb44bfa5ddca971b34').then(data=>{
        console.log(data)
    })
    }
}

export default BaiDuMap;