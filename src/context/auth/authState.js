import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import clientAxios from '../../config/axios'

import {REGISTER_TRUE, REGISTER_FALSE, USER_OK,
    LOGIN_TRUE,LOGIN_FALSE, LOGOUT} from '../../types'


const AuthState = props => {

    const initialstate = {
        token: localStorage.getItem('token'),
        user: null,
        auth: null,
        msg: null

    }

    const [state, dispatch] = useReducer( authReducer, initialstate)

    const registerUserFn = async user =>{
        try {

            const resp = await clientAxios.post('/api/user', user)

            dispatch({
                type: REGISTER_TRUE,
                payload: resp.data
            })
            
        } catch (error) {
            
            dispatch({
                type: REGISTER_FALSE,
                payload: error.response.data.msg
            })

            setTimeout(()=>{
                dispatch({
                    type: REGISTER_FALSE,
                    payload: null
                })
            },5000)

            
            
        }
    }

    return(
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,

                registerUserFn
            }}
        >{props.children}

        </authContext.Provider>

    )
}

export default AuthState