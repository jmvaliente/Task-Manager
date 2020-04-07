import React, { useReducer } from 'react'
import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'

import {NEW_PROYECT} from '../../types'

const ProyectState = props => {
    const initialState = {
        newProyect: false
    }

    //dispatch
    const [state,dispatch] = useReducer(proyectReducer,initialState)

    //Funtion CRUD

    const newProyectFn = () =>{
        dispatch({
            type: NEW_PROYECT,
            payload: true
        })
    }

    return (
        <proyectContext.Provider
            value={{
                newProyect: state.newProyect,

                newProyectFn
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState