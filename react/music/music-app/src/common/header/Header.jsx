import React, { Component } from 'react';
import './header.styl'
class Header extends Component {
    state = {  }
    handleBack=()=>{
        window.history.back()
    }
    render() { 
        return ( 
            <div className="music-header">
                <span className="header-back" onClick={this.handleBack}>
                    <i className="icon-back"></i>
                </span>
                <div className="header-title">
                    {this.props.title}
                </div>
            </div>
         );
    }
}
 
export default Header;