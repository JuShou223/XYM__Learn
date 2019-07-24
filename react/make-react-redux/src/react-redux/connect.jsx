import React, { Component } from 'react';
import { Consumer } from './context'
export default (mapStatrToprops, mapDispatchToProps) => (WrappedComponent) => {
    class ConnectdCompontent extends Component {
        render() {
            return (
                <Consumer>
                    {
                        (store) => {
                            const state = store.state;
                            const dispatch = store.dispatch;
                            let filterProps = {}
                            if (typeof mapDispatchToProps === 'function') {
                                Object.assign(filterProps, mapDispatchToProps(dispatch))
                            }
                            if (typeof mapStatrToprops === 'function') {
                                Object.assign(filterProps, mapStatrToprops(state))
                            }
                            return (
                                <WrappedComponent {...filterProps} {...this.props}></WrappedComponent>
                            )
                        }
                    }
                </Consumer>
            )
        }
    }
    return ConnectdCompontent
}