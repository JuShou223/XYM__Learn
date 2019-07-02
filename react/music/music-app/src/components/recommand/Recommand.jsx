import React, { Component } from 'react';
import { getCarousel } from '../../api/recommand';
class Recommand extends Component {
  state = {  }
  componentDidMount(){
    getCarousel().then(res=>{
      console.log(res)
    })
  }
  render() { 
    return ( 
      <div>
        Recommand
      </div>
     );
  }
}
 
export default Recommand;