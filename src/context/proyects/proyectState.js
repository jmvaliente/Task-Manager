import React, { useReducer } from 'react'
import proyectContext from './proyectContext'
import proyectReducer from './proyectReducer'
import ProyectList from '../../components/proyect/ProyectList'

const ProyectState = props => {
    const initialState = {
        newProyect: false
    }

    //dispatch
    const [state,dispatch] = useReducer(proyectReducer,initialState)

    //Funtion CRUD

    return (
        <proyectContext.Provider
            value={{
                newProyect: state.newProyect
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState