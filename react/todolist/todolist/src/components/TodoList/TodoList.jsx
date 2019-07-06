import React, { Component } from 'react';
class TodoList extends Component {
	state = {}
	render() {
		const { todos, toggleTodo } = this.props;
		return (
			<div>
				{
					todos.map((todo, i) => {
						return (
							<li key={i} onClick={()=>{toggleTodo(todo.id)}} style={{textDecoration: todo.completed ? 'line-through' : '',cursor:'pointer'}}>{todo.text}</li>
						)
					})
				}
			</div>
		);
	}
}

export default TodoList;