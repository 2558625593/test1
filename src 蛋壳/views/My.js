import React, { Component } from 'react';
import withLogin from "../uitl/withLogin"
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