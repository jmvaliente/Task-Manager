import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import {ALERT_TRUE,ALERT_FALSE} from '../../types'

const alertState = props => {

    const initalState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initalState )



    return (
        <AlertContext.Provider
            value={{
    
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}


export default alertState
