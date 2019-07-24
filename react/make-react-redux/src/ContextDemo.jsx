import React, { Component } from 'react';
import connect from './react-redux/connect'
class Count extends Component {
	state = {  }
	render() { 
		const {countReducer, increment, decrement} = this.props
		return ( 
			<div>
				count:{countReducer}
				<button onClick={()=>{increment()}}>+</button>
				<button onClick={()=>{decrement()}}>-</button>

			</div>
		 );
	}
}
const mapStateToProps = state => {
	return {
		countReducer: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: ()=> dispatch({type: 'INCREMENT'}),
		decrement: ()=> dispatch({type: 'DECREMENT'})
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)