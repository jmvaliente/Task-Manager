import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import taskReducer from './taskReducer'

import {LIST_TASK} from '../../types'

const TaskState = props =>{
    const initalState = {
        tasks:[
            {name: "Update System", complete: false, proyectId : 1},
            {name: "Change Colors", complete: false, proyectId: 2},
            {name: "Change UI", complete: true, proyectId: 3},
            {name: "Update Images", complete: true, proyectId: 4},
            {name: "Update System", complete: false, proyectId : 2},
            {name: "Change Colors", complete: false, proyectId: 4},
            {name: "Change UI", complete: true, proyectId: 4},
            {name: "Update Images", complete: true, proyectId: 2},
            {name: "Update System", complete: false, proyectId : 2},
            {name: "Change Colors", complete: false, proyectId: 1},
            {name: "Change UI", complete: true, proyectId: 4},
            {name: "Update Images", complete: true, proyectId: 2}
        ]
    }

    const [state,dispatch] = useReducer(taskReducer, initalState)

    const listTaskFn = (taskId) => {
        dispatch({
            type: LIST_TASK,
            payload: taskId
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasklist: state.tasks,

                listTaskFn
            }}
        >
            {props.children}

        </TaskContext.Provider>


    )
}

export default TaskState