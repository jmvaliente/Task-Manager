import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import {ALERT_TRUE,ALERT_FALSE} from '../../types'

const AlertState = props => {

    const initalState = {
        alert: null
    }

    const [state, dispatch] = useReducer (AlertReducer, initalState )

    const alertShow = (msg, category) =>{
        dispatch({
            type: ALERT_TRUE,
            payload:{msg, category}
        })

        setTimeout(() => {
            dispatch({
                type: ALERT_FALSE
            })
        }, 5000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,

                alertShow
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}


export default AlertState
