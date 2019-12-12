/*
 * @Author: your name
 * @Date: 2019-10-25 09:49:55
 * @LastEditTime: 2019-10-25 10:14:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coffee\src\views\My.js
 */
import React, { Component } from 'react';
import withLogin from '../utils/withLogin'
class My extends Component {
    render() {
        return (
            <div>
                my
            </div>
        );
    }
}

export default withLogin(My);