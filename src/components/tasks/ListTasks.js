import React, { Fragment, useContext } from 'react'
import Task from './Task'

import proyectContext from '../../context/proyects/proyectContext'
import taskContext from '../../context/tasks/taskContext'

const ListTasks = () => {

    const context = useContext(proyectContext)
    const contextTask = useContext(taskContext)

    const {activeProyect, deleteProyectFn} = context
    const { activeTasks } = contextTask

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
                        {activeTasks.length === null
                            ? (<li><p>Tasks no added</p></li>)
                            : activeTasks.map(el => (
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