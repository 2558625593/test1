/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:50:02
 * @LastEditTime: 2019-10-16 10:44:17
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import withLogin from '../../util/withLogin'
class My extends Component {
    render() {
        return (
            <div>
                我的
            </div>
        );
    }
}
export default withLogin(My);