import React, { Component } from 'react';
import './miniPlayer.styl'
class MiniPlayer extends Component {
  state = {  }
  handleShow=()=>{
      if(true || this.props.song.url){
            this.props.showPlayer()
      }
  }
  render() { 
    const { showStatus } = this.props;
    let playerStyle = {};
    if (showStatus) playerStyle = { display: 'none' }
    return (
      <div className="mini-player" style={playerStyle}
      onClick={this.handleShow}
      >
          MiniPlayer
      </div>
    );
  }
}
 
export default MiniPlayer;