import React, { Fragment, useContext } from 'react'
import Task from './Task'

import proyectContext from '../../context/proyects/proyectContext'

const ListTasks = () => {

    const context = useContext(proyectContext)

    const {activeProyect, deleteProyectFn} = context

    const state = [
        {name: "Update System", complete: false},
        {name: "Change Colors", complete: false},
        {name: "Change UI", complete: true},
        {name: "Update Images", complete: true}
    ]

    if (!activeProyect){
        return(
            <h4>Select proyect</h4>
        )
    }
    
    return(
        <Fragment>
            <h4>Proyect : {activeProyect[0].name}</h4>
                <div className = "container">
                    <ul className = "list-group">
                        {state.length === 0
                            ? (<li><p>Tasks no added</p></li>)
                            : state.map(el => (
                                <Task task = {el}
                                />
                                ))
                        }
                    </ul>
                </div>
            <button
                className = "mt-2 btn btn-danger"
                onClick = {() => deleteProyectFn(activeProyect[0])}
            >
                Delete Proyect</button>
        </Fragment>
    )
}

export default ListTasks