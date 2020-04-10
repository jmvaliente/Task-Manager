import React, {useContext} from 'react'
import taskContext from '../../context/tasks/taskContext'

import proyectContext from '../../context/proyects/proyectContext'

const Task = ({task}) => {

    const contextTask = useContext(taskContext)
    const context = useContext(proyectContext)

    const { listTaskFn, deleteTaskFn } = contextTask
    const { activeProyect } = context

    const {name,complete,id} = task

    const onClick = () =>{
        console.log(id)
        deleteTaskFn(id)

        listTaskFn(activeProyect[0].id)

    }

    return(
     <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>{name}</p> 
            <div className="align-items-end">
                {complete 
                    ? <button className = "badge badge-primary badge-pill">Complete</button>
                    : <button className = "badge badge-danger badge-pill">incomplete</button>
                }
                <button className = "ml-2 p-2 bd-highlight badge badge-pill">Edit</button>
                <button
                    onClick = {onClick} 
                    className = "ml-2 p-2 bd-highlight badge badge-pill">Delete</button>
            </div>
     </li>
    )
}

export default Task