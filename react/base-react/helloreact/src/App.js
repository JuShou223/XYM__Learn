import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './Child'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        msg: 'change msg'
      })
    },3000)
  }
  renderFooter() {
    return (
      <footer>foot</footer>
    )
  }
  render() {
    const {msg} = this.state
    const isRed = true
    const red = 'red'
    const Main = (<p>main</p>)
    const lists = [1,2,3,4,5]
    const listsNode = lists.map((list,index)=><li key={index}>{list}</li>)
    return (
      <div className={isRed?red:''}>
        {msg}
        {isRed?<span>red</span> : <span>nored</span>}
        {Main}
        {this.renderFooter()}
        {listsNode}
        <Child msg={msg}/>
      </div>
    )
  }
}

export default App;
