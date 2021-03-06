import React, {useContext} from 'react'
import taskContext from '../../context/tasks/taskContext'

import proyectContext from '../../context/proyects/proyectContext'

const Task = ({task}) => {

    const contextTask = useContext(taskContext)
    const context = useContext(proyectContext)

    const { listTaskFn, deleteTaskFn, stateTaskFn, activeTasksFn } = contextTask
    const { activeProyect } = context

    const {name,complete,id} = task

    const onClickDelete = () =>{
        deleteTaskFn(id)

        listTaskFn(activeProyect[0].id)

    }

    const onClickStatus = (task) => {
        if(task.complete){
            task.complete = false
        }else{
            task.complete = true
        }
        stateTaskFn(task)
    }

    const onClickEdit = (task) => {
         activeTasksFn(task)
    }

    return(
     <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>{name}</p> 
            <div className="align-items-end">
                {complete 
                    ? <button onClick = {() => onClickStatus(task)} className = "badge badge-primary badge-pill">Complete</button>
                    : <button onClick = {() => onClickStatus(task)} className = "badge badge-danger badge-pill">incomplete</button>
                }
                <button onClick = {() => onClickEdit(task)} className = "ml-2 p-2 bd-highlight badge badge-pill">Edit</button>
                <button
                    onClick = {onClickDelete} 
                    className = "ml-2 p-2 bd-highlight badge badge-pill">Delete</button>
            </div>
     </li>
    )
}

export default Task