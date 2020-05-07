import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import {REGISTER_TRUE, REGISTER_FALSE, USER_OK,
    LOGIN_TRUE,LOGIN_FALSE, LOGOUT} from '../../types'


const AuthState = props => {

    const initialstate = {
        token: localStorage.getItem('token'),
        user: null,
        auth: null,
        msg: null

    }

    const [state, setState] = useReducer( authReducer, initialstate)

    return(
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg
            }}
        >{props.children}

        </authContext.Provider>

    )
}

export default AuthState