import Buy from '../components/buyButton/Buy'
import {connect} from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        onTouch: state.onTouch
    }
}

export default connect(mapStateToProps)(Buy)