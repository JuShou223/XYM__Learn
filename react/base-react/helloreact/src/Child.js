import React,{Component} from 'react'
class Child extends Component {
    handleAnotherFun = () =>{
        console.log('anotherfun')
    }
    handleClickk = (e) => {
        console.log(e.target.innerHTML)
        console.log(this)
        this.handleAnotherFun()
    }
    handleChange = (e)=>{
        this.setState({
            inputVal: e.target.value
        })
    }
    state = {
        inputVal: ''
    }
    render(){
        return (
            <div onClick={this.handleClickk}>
                {this.props.msg}
            <input type="text" placeholder="请输入内容" onChange={this.handleChange}></input>
            <input type="text" placeholder="请输入内容" value={this.state.inputVal} ></input>
            </div>
        )
    }
}
export default Child