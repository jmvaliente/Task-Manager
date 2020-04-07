import React, { useReducer } from 'react'
import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'

import {v4 as uuid} from 'uuid'
import Swal from 'sweetalert2'

import {NEW_PROYECT, LIST_PROYECT, ADD_PROYECT, VALIDATE_NEW_PROYECT} from '../../types'



const ProyectState = props => {

    const listProyect = [
        {id:1, name: 'Web Developer'},
        {id:2, name: 'UI developer'},
        {id:3, name: 'SEO/SEM strategy'}
    ]
    const initialState = {
        stateListProyect: [],
        newProyect: false,
        validateNewProyect: true
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

    const addProyectFn = (proyect) =>{
        proyect.id = uuid()
        dispatch({
            type: ADD_PROYECT,
            payload: proyect
        })
    }
    // validate form new Proyect
    const validateNewProyectFn = () => {
        dispatch({
            type: VALIDATE_NEW_PROYECT,
            payload: false
        })
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Need a name the proyect',
          })
    }


    return (
        <proyectContext.Provider
            value={{
                newProyect: state.newProyect,
                listProyect: state.stateListProyect,

                newProyectFn,
                listProyectFn,
                addProyectFn,
                validateNewProyectFn
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState