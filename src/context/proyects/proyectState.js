import React, { useReducer } from 'react'
import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'

import {NEW_PROYECT} from '../../types'

const ProyectState = props => {
    const initialState = {
        newProyect: false,
        listProyect: [
            {id:1, name: 'Web Developer'},
            {id:2, name: 'UI developer'},
            {id:3, name: 'SEO/SEM strategy'}
        ]
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
                listProyect: state.listProyect,

                newProyectFn
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState