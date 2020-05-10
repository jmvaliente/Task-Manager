import {REGISTER_TRUE, REGISTER_FALSE, USER_OK,
        LOGIN_TRUE,LOGIN_FALSE, LOGOUT} from '../../types'

export default (state, action) => {

    switch (action.type) {

        case LOGIN_TRUE:
        case REGISTER_TRUE:
            console.log(action.payload.token)
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                auth: true,
                msg: null
            }
        case LOGOUT:
        case LOGIN_FALSE:
        case REGISTER_FALSE:
            localStorage.removeItem('token')
            return{
                ...state,
                auth: null,
                user: null,
                token: null,
                msg: action.payload
            }
        case USER_OK:
            return{
                ...state,
                auth: true,
                user: action.payload
            }
    
        default:
            return state;
    }
}