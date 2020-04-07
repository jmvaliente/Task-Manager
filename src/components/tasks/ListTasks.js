import React, { Fragment, useContext } from 'react'
import Task from './Task'

import proyectContext from '../../context/proyects/proyectContext'

const ListTasks = () => {

    const context = useContext(proyectContext)

    const {activeProyect} = context

    const state = [
        {name: "Update System", complete: false},
        {name: "Change Colors", complete: false},
        {name: "Change UI", complete: true},
        {name: "Update Images", complete: true}
    ]
    
    return(
        <Fragment>
            {activeProyect ? <h4>Proyect : {activeProyect[0].name}</h4> : null}
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
            >
                Delete Proyect</button>
        </Fragment>
    )
}

export default ListTasks