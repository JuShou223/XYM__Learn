import React from 'react'

const WithLogin = (Com) => {
    const isLogin = false
    class NewComponent extends React.Component{
        render (){
            const props = this.props;
            if(isLogin){
                return (
                    <button>需要登🦌</button>
                )
            }
            return (
                <Com {...props}></Com>
            )
        }
    }
    NewComponent.displayName = `withLogin(${Com.displayName})`
    return NewComponent
}

export default WithLogin