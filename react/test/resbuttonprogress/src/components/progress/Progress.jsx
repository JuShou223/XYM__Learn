import React, { Component } from 'react';
import './progress.css'

class Progress extends Component {
    state = {  }
    render() { 
        const { progress, dispatch,disableDrag } = this.props
        return ( 
            <div className="container1" 
            onTouchStart={(e)=>{
                console.log(e.touches[0].clientX)
                if(disableDrag){
                    dispatch({
                        type: 'ONDRAGSTART',
                        progress: e.touches[0].clientX
                    })
                }
            }} onTouchMove={(e)=>{
                if(disableDrag){
                    dispatch({
                        type: 'onDRAG',
                        progress: e.touches[0].clientX
                    })
                }
            }}
            onTouchEnd={(e)=>{
                console.log(e)
                if(disableDrag){
                    dispatch({
                        type: 'onDragEnd'
                    })
                }
            }}
            >
                <div className="progress" style={{width: progress}}></div>
            </div>
         );
    }
}
 
export default Progress;
