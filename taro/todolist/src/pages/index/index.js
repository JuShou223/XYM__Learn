import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [
        'get up',
        'coding',
        'sleep'
      ],
      inputVal: ''
    }
  }
  config = {
    navigationBarTitleText: 'taro首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  inputHandler(e){
    this.inputVal = e.target.value
  }
  addItem(e){
    let {list} = this.state;
    const inputVal = this.inputVal;
    if(inputVal==="") return
    else{
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal
    })
  }
  delItm(index){
    let {list} = this.state
    list.splice(index,1)
    this.setState({
      list
    })
  }
  render () {
    return (
      <View className='index'>
        <View className="list_warp">
          <Text>Todo list</Text>
          <Input className="input" type="text" value={inputVal} onInput={this.inputHandler.bind(this)}></Input>
          <Button className="add" onClick={this.addItem.bind(this)}>添加</Button>
          {
            list.map((item,index)=>{
              return (
                <View>
                  <Text>{index+1}.{item}</Text>
                  <Button className="del" onClick={this.delItm.bind(this,index)}>删除</Button>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
