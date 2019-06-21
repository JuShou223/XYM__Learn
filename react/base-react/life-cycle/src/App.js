import React from 'react';
import Child from './Child.jsx'
import Child1 from './Child1.jsx'
import Context from './Context.jsx'
import Context1 from './Context1.jsx'
// import propTypes from 'prop-types'
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor () {
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: false
  }
  handleChildPropsChange = () => {
    let {count} = this.state;
    count++;
    this.setState({
      count
    })
  } 
  handleToggleChild = ()=> {
    const {showChild} = this.state
    this.setState({
      showChild:!showChild
    })
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.refs.stringRef.innerHTML = 'new String Ref'
      this.methodRef.innerHTML = 'new method ref'
      this.objRef.current.innerHTML = 'new object ref'  // 最新的ref用法
    }, 1000);
    
  }
  render () {
    const {showChild,count} = this.state
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <p ref={(ref) => this.methodRef = ref}>method ref</p>
        <p ref={this.objRef}>Object ref</p>
        {/* innerHTML */}
        
        <div dangerouslySetInnerHTML={{
          __html: `<strong>strong</strong>`
        }}>
        </div>

        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}>toggle Child</button>
        {
          showChild ? <Child count={count} /> : <Child1 count={count} />
        }
        {/* name */}
        <Context>hbx <p>name</p>  22 <p>age</p> </Context>
        <p>---------16.x.x----------</p>
        <Context1 />
      </div>
    )
  }

}

export default App;
