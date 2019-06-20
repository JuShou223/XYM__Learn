import React from 'react'

class Child1 extends React.Component {
    state ={
        a:1
    }
    // 根据返回值 更新state 
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        console.log(props)
        return {
            ...props,
            ...state
        };
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return 888
    }
    // 15.xxx a=== undefine
    // 16.xxx a=== getSnapshotBeforeUpdate
    componentDidUpdate(preProps,preState,a){
        console.log("componentDidUpdate",a)
    }
    handleStateChange=()=>{
        this.setState({
            a:10
        })
    }
    render() {
        console.log("渲染的时候：state",this.state)
    return (
        <div>
            <button onClick={this.handleStateChange}>
                Child1 ChangeState
            </button>
            child1 Component
            {this.props.count}
        </div>
    )
  }

}
export default Child1