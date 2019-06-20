import React from 'react'

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCountChange =()=>{
    let {childCount} = this.state
    childCount++
    this.setState({
      childCount
    })
  }
  componentWillMount = ()=> {
    console.log('componentWillMount')
    this.interval = setInterval(() => {
      console.log("setinterval")
    }, 1000);
  }
  componentWillUnmount=()=>{
    console.log("componentWillunMount")
    clearInterval(this.interval)
  }
  componentDidMount =() =>{
    console.log('componentDidMount')
  }
  // props 更新的 组件性能优化时要用到的 控制不必要的更新
  shouldComponentUpdate = (nextProps,nextState)=>{
    console.log("shouldComponentUpdate")
    if(nextProps.count!== this.props.count){
      return true
    }
    return true
  }
  componentWillReceiveProps=()=>{
    console.log("componentWillReceiveProps")
  }
  componentWillUpdate=()=>{
    console.log("componentWillUpdate")
  }
  componentDidUpdate=()=>{
    console.log("componentDidUpdate")
  }
  render() {
    const {count} = this.props;
    const {childCount} = this.state;
    console.log('render')
    return (
      <div>
        <button onClick={this.handleChildCountChange}>
          child state change
        </button>
        child Component 
        count: {count}
        childCount: {childCount}
      </div>
    )
  }

}
export default Child