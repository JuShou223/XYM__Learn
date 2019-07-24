import React, { Component } from 'react'
// flushSync 执行某个任务时 以优先级最高的方式执行
import { flushSync } from 'react-dom'
import './index.css'
class Parent extends Component {
    state = {
        async: true,
        num: 1,
        length: 2000
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateNum()
        }, 1500)
    }
    updateNum = () => {
        const { async, num } = this.state
        const newNum = num === 5 ? 0 : num + 1
        if (async) {
            this.setState({
                num: newNum
            })
        } else {
            flushSync(() => {
                this.setState({
                    num: newNum
                })
            })
        }
    }
    changeAsync = () => {
        return flushSync(() => {
            const { async } = this.state
            this.setState({
                async: !async
            })
        })
    }
    render() {
        let grids = []
        const { async, num, length } = this.state
        for (let i = 0; i < length; i++) {
            grids.push(
                <div className='item' key={i}>{num}</div>
            )
        }
        return (
            <div>
                async:
                <input type="checkbox" checked={async} onChange={() => {
                    this.changeAsync()

                }} name="" id="" />
                <div className="wrapper">
                    {
                        grids
                    }
                </div>
            </div>
        );
    }
}

class Index extends Component {
    state = {}
    render() {
        return (
            <React.unstable_ConcurrentMode>
                <Parent></Parent>
            </React.unstable_ConcurrentMode>
        );
    }
}

export default Index;