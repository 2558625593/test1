/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 10:38:00
 * @LastEditTime: 2019-10-18 15:06:14
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import withLogin from '../../util/withLogin'
class My extends Component {
    render() {
        return (
            <div className='home'>
                my
            </div>
        );
    }
}

export default withLogin(My);