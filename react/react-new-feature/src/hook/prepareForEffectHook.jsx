import React, { Component } from 'react';
class Index extends Component {
    state = {
        count: 0,
        size: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    componentWillMount(){
        window.removeEventListener('resize',this.handleResize)
    }
    componentDidMount = () => {
        document.title = this.state.count
        window.addEventListener('resize', this.handleResize)
    }
    handleResize = () => {
        this.setState({
            size: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        })
    }
    componentDidUpdate = () => {
        document.title = this.state.count
    }
    render() {
        const { count, size } = this.state
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        count: count + 1
                    })
                }}>
                    click: {count},
                    szie: {size.width} X {size.height}
                </button>
            </div>
        );
    }
}

export default Index;