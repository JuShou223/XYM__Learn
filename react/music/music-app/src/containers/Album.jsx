import { connect } from "react-redux";
import Album from "../components/album/Album";
import { cahngeSong } from '../redux/action'
// const mapStateToProps =(state)=>{
//     return null
// }
const mapDispatchToProps = (dispatch)=>{
    return {
        changeCurrentSong:(song)=>{
            dispatch(cahngeSong(song))
        }
    }
}
export default connect(null,mapDispatchToProps)(Album);
// export default Album