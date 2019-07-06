import AddToDoList from '../components/addToDoList/AddToDoList'
import { connect } from "react-redux";
import { actionAddToDo } from "../redux/action";

const mapDispatchToProps = (dispatch)=>{
    return {
        addToDo:(text)=>{
            dispatch(actionAddToDo(text))
        }
    }
}
export default connect(null,mapDispatchToProps)(AddToDoList)