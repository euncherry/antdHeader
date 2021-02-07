import { connect } from "react-redux"
import login_process from "../../service/transaction/login_process"
import ACTION from "../../store/actions/action"


const mapDispatchToProps = (dispatch) => {
    return {
        LOGINED: function (payload) {
            dispatch(ACTION.LOGIN_ACTION_FUNC(payload))
        },
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))
        }
    }
}



export default connect(null, mapDispatchToProps)(login_process)