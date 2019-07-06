import React, { Component } from 'react';
import './buy.css'
class Buy extends Component {
    state = {  }
    render() { 
        const { dispatch } = this.props;
        const {onTouch} = this.props;
        return ( 
            <div className="container">
                <button className={`buyButton ${onTouch ? 'onTouch' : '' }`} 
                onTouchStart={(e)=>{
                    dispatch(
                        {
                            type: 'ONTOUCHSTART'
                        }
                    )
                }}
                onTouchEnd={(e)=>{
                    dispatch({
                        type: 'ONTOUCHEND'
                    })
                    console.log('你点击了')
                }}>购买</button>
            </div>
         );
    }
}
 
export default Buy;