import {REGISTER_TRUE, REGISTER_FALSE, USER_OK,
        LOGIN_TRUE,LOGIN_FALSE, LOGOUT} from '../../types'

export default (state, action) => {

    switch (action.type) {

        case REGISTER_TRUE:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                auth: true,
                msg: null
            }

        case REGISTER_FALSE:
            return{
                ...state,
                auth: null,
                msg: action.payload
            }
    
        default:
            return state;
    }
}