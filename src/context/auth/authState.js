import React, { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

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

            getUserFn()
            
        } catch (error) {
            
            dispatch({
                type:LOGIN_FALSE,
                payload: error.response.data.msg
            })

            setTimeout(()=>{
                dispatch({
                    type:LOGIN_FALSE,
                    payload: null
                })
            },5000)

            
            
        }
    }

    const getUserFn = async () =>{
        const token = localStorage.getItem('token')

        if(token){
            tokenAuth(token)
        }

        try {
            const resp = await clientAxios.get('api/auth')
            dispatch({
                type: USER_OK,
                payload: resp.data.user
            })

        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_FALSE
            })
        }
    }

    const loginSuccessFn = async data =>{
        try {
            const resp = await clientAxios.post('/api/auth', data)
            console.log(resp.data.token)

            dispatch({
                type: LOGIN_TRUE,
                payload: resp.data
            })
            
            getUserFn()
            
        } catch (error) {
        
            dispatch({
                type:LOGIN_FALSE,
                payload: error.response.data.msg
            })

            setTimeout(()=>{
                dispatch({
                    type:LOGIN_FALSE,
                    payload: null
                })
            },5000)
        }
    }

    const logOutFn = () =>{
        dispatch({
            type: LOGOUT
        })
    }

    return(
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,

                registerUserFn,
                loginSuccessFn,
                getUserFn,
                logOutFn
            }}
        >{props.children}

        </authContext.Provider>

    )
}

export default AuthState