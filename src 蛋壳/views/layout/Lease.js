/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:49:50
 * @LastEditTime: 2019-10-15 16:34:06
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import withLogin from '../../util/withLogin'
class Lease extends Component {
    render() {
        return (
            <div>
                租赁
            </div>
        );
    }
}

export default withLogin(Lease);