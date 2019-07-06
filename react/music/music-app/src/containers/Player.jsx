import { connect } from "react-redux";
import Player from '../components/player/Player'
import { showPlayer} from '../redux/action'
const mapStateToProps = (state) => {
    return {
        showStatus: state.showStatus,
        currentSong: state.song
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        showMusicPlayer: (status)=>{
            dispatch(showPlayer(status))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);
// export default Player
