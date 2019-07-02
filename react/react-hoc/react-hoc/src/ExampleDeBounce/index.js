import React, { Component } from 'react';
import { decArrowDeBounce, decDebounce, decDisplayName } from './util'
// 防抖

@decDisplayName('customExampleDebounce') class ExampleDeBounce extends Component {
    state = {}
    @decDebounce(1000) handleSubmit() {
        console.log('result submit')
    }
    @decArrowDeBounce(1000) handleBuy = ()=>{
        console.log('buy now')
    }
    render() {
        console.log(this.handleBuy,this.handleSubmit)
        return (
            <div>
                <button onClick={this.handleSubmit}>
                    提交订单
            </button>
                <button onClick={this.handleBuy}>
                    立即购买
            </button>
            </div>
        );
    }
}

export default ExampleDeBounce;