import TodoList from '../components/TodoList/TodoList'
import { connect } from 'react-redux';
import {actiontoggleTodo} from '../redux/action'
const mapStateToProps = state => {
    return {
        todos: state.addToDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo:(id)=>{
            dispatch(actiontoggleTodo(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)