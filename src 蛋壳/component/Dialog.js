import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <div className="bar">
                <div className="ondia">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dialog;