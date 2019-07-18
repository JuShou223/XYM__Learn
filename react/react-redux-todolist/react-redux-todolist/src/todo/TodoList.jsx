import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {
  state = {  }
  render() { 
    const { todos, toggleTo} = this.props;
    console.log(todos)
    return (
      <div>
        {
          todos.map((todo, i) =>{
            console.log(todo)
            return (
              <li key={i} onClick={()=>{toggleTo(todo.id)}} style={{textDecoration: todo.completed ? 'line-through' : '',cursor:'pointer'}}>{todo.text}</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleTo: id=>dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);