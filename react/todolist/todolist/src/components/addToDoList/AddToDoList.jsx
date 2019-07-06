import React, { Component } from 'react';
class AddToDoList extends Component {
    state = {}
    render() {
        const { addToDo } = this.props
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (this.refs.node.value.trim()) {
                        addToDo(this.refs.node.value)
                    }
                }}>
                    <input type="text" ref="node" />
                    <button type="submit">添加</button>
                </form>
            </div>
        );
    }
}

export default AddToDoList;