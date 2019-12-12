import React, { Component } from 'react'
export default function withLogin(Comp) {
    class NewComp extends Component {
        componentWillMount() {
            if (!localStorage.user) {
                this.props.history.push('/login')
            }
        }
        render() {
            return <Comp />
        }
    }
    return NewComp
}