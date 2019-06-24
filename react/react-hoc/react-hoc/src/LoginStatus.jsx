import React from 'react';
import WithLogin from './WithLogin'
@WithLogin

class LoginStatus extends React.Component{
    render(){
        return (
            <button>已经登陆</button>
        )
    }
}
LoginStatus.displayName = "LoginStatus"
export default LoginStatus