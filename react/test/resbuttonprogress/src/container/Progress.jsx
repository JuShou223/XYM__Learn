import Progerss from '../components/progress/Progress'
import {connect} from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        progress: state.progress
    }
}

export default connect(mapStateToProps)(Progerss)