import React, { useReducer } from 'react'
import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'

import {NEW_PROYECT, LIST_PROYECT} from '../../types'



const ProyectState = props => {

    const listProyect = [
        {id:1, name: 'Web Developer'},
        {id:2, name: 'UI developer'},
        {id:3, name: 'SEO/SEM strategy'}
    ]
    const initialState = {
        newProyect: false,
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

    const listProyectFn = () =>{
        dispatch({
            type: LIST_PROYECT,
            payload: listProyect
        })
    }

    return (
        <proyectContext.Provider
            value={{
                newProyect: state.newProyect,
                listProyect: listProyect,

                newProyectFn,
                listProyectFn
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState