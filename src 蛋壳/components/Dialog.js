/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 11:26:46
 * @LastEditTime: 2019-10-15 12:25:31
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <div className='dialog'>
              <div className='d-main'>
                  {this.props.children}
              </div>
            </div>
        );
    }
}

export default Dialog;