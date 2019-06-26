import React, { Component } from 'react';
import {connect} from 'react-redux'
class Filter extends Component {
    state = {  }
    render() { 
    const {filterType,toggleType} = this.props
        return (
            <div>
                filter:
                <button style={{color: filterType==='ALL' && 'red'}} onClick={()=>{toggleType('ALL')}}>all</button>
                <button style={{color: filterType==='ACTIVE' && 'red'}} onClick={()=>{toggleType('ACTIVE')}}>active</button>
                <button style={{color: filterType==='COMPLETED' && 'red'}} onClick={()=>{toggleType('COMPLETED')}}>completed</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return({
    filterType: state.filter
})}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleType: type=> dispatch({type})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter);